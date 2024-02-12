import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Container, CustomSearchBar } from "./Styled.searchbar";
import axios from "axios"

interface Props {
    closeModal: () => void;
    isOpen: boolean;
    updateStatusApp: Dispatch<SetStateAction<boolean>>;
    restartFunc: () => void;
}

export const SearchSC: React.FC<Props> = ({ closeModal, isOpen, updateStatusApp, restartFunc }) => {
    const [SValue, updateSValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);



    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        const handleKeyPress = async (event: any) => {

            if (event.key === "Enter") {
                if (SValue === "skynet://application:skP/action/offsite") {
                    let meta = {
                        "Content-Type": "text/json",
                        "AuthCodeSkyLink": "ATB-AplhaTangoBeta",
                        "SkynetSystem": "skynet://application:skP/action/offsite"
                    }

                    let result = axios("http://localhost:3001/api/v2/actions/offsite", {
                        method: "POST",
                        headers: meta
                    }).then((x) => {
                        let result = {
                            header: x.headers,
                            request: x.request,
                            data: x.data,
                            statusCode: x.status,
                            statusText: x.statusText,
                            skynet: x.headers.get ? ("SkynetSystem") : "Cannot Get SkyCode",
                            config: x.config
                        }

                        console.log(result)
                        updateStatusApp(true);
                        closeModal();
                    });

                    console.log(result)
                } else if(SValue === "devmode://restart:count") {
                    restartFunc()
                } else if (SValue.startsWith("skynet://connect:rpc/")) {
                    let skynetAuth = prompt("parece que você está tentando acessar os serviçoes da skynet, qual o skylink deseja requisitar")

                    if (skynetAuth) {
                        let meta = {
                            "Content-Type": "text/json",
                            "AuthCodeSkyLink": "ATB-AplhaTangoBeta",
                            "SkynetSystem": skynetAuth
                        }

                        axios("http://localhost:3001/api/v2/skynetConnect", {
                            method: "POST",
                            headers: meta
                        }).then((x) => {
                            let result = {
                                header: x.headers,
                                request: x.request,
                                data: x.data,
                                statusCode: x.status,
                                statusText: x.statusText,
                                skynetSystem: x.headers.get ? ("SkynetSystem") : "Cannot Get SkyCode",
                                config: x.config
                            }
                            if(result.data.responseS.skynet.skyCode === "skynet://api:response/offsite?=true") {
                                updateStatusApp(true);
                            }
                            closeModal();
                        });
                    }
                } else {
                    alert(SValue)
                }
                closeModal();
            }

        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyPress);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [SValue, isOpen, closeModal]);

    return (
        <Container>
            <CustomSearchBar
                type="search"
                ref={inputRef}
                value={SValue}
                content={SValue}
                onChange={(e) => {
                    updateSValue(e.target.value);
                }}
            />
        </Container>
    );
}