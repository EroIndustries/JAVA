const ANDROIDHOMEPAGE=()=>{

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        HOMEAPPS(ELEMENT);

    });

    ROUNDFOOTER('','',(ELEMENT)=>{

        ICON(ELEMENT,WHITEAPPICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDAPPPAGE,'ANDROIDHOMEPAGE');

            });

        });

        ICON(ELEMENT,WHITEGAMEICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDGAMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        ICON(ELEMENT,WHITEUSERHOLDERICON,(ELEMENTED)=>{

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDUSERPAGE,'ANDROIDHOMEPAGE');

            });

        });

    });

};

const ANDROIDAPPPAGE=()=>{

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        HOMEAPPS(ELEMENT);

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','Apps',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDGAMEPAGE=()=>{

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        HOMEAPPS(ELEMENT);

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','Games',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const ANDROIDUSERPAGE=()=>{

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        VIEW(ELEMENT,(ELEMENTED)=>{

            STYLED(ELEMENTED,'display','inline-flex');

            ICON(ELEMENTED,WHITEUSERHOLDERICON,(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'width','50%');
                STYLED(ELEMENTEDS,'height','70%');

            });

            CONDITION(localStorage.getItem("UserData"),()=>{

                BUTTON(ELEMENTED,'Sign In','','blue',()=>{

                },()=>{

                });

            },()=>{

                BUTTON(ELEMENTED,'Sign In','','green',(ELEMENTS)=>{

                },(ELEMENTS)=>{
                    STYLED(ELEMENTS,'width','30%');
                    STYLED(ELEMENTS,'position','absolute');
                    STYLED(ELEMENTS,'bottom','5%');
                    STYLED(ELEMENTS,'right','5px');
                    STYLED(ELEMENTS,'left','auto');
                    STYLED(ELEMENTS,'border-radius','10px');
                });
                
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Settings',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITESETTINGSICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

            RELOAD();

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Sync',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITESYNICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Help',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITEHELPICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

        BUTTON(ELEMENT,' ','','green',()=>{

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Contact Us',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITEPHONEICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });


    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'','My Profile',(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};

const APPPAGE=(Element)=>{

    console.log(Element);

    CLEAR("");

    FULLVIEW('','',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');

        ICON(ELEMENT,Element.AppImage,(ELEMENTED)=>{
            STYLED(ELEMENTED,'width','50%');
            STYLED(ELEMENTED,'height','50%');
            STYLED(ELEMENTED,'border-radius','5%');
            STYLED(ELEMENTED,'margin-top','1%');
            STYLED(ELEMENTED,'margin-left','1%');

        });

        BUTTON(ELEMENT,' ','','green',()=>{

            WEBSITE(DRIVEDIRECTLINK +Element.AppLink);

        },(ELEMENTES)=>{

            STYLED(ELEMENTES,'display','inline-flex');

            TEXT(ELEMENTES,'','Install',(ELEMENTEDS)=>{

                STYLED(ELEMENTEDS,'text-align','left');
                STYLED(ELEMENTEDS,'margin-left','1%');
                STYLED(ELEMENTEDS,'color','#ffffff');

            });

            ICON(ELEMENTES,WHITEDOWNLOADICON,(ELEMENTED)=>{
                STYLED(ELEMENTED,'margin-right','5%');
            });

        });

    });

    HEADER('','transparent',(ELEMENT)=>{

        ICON(ELEMENT,WHITEBACKICON,(ELEMENTED)=>{

            STYLED(ELEMENTED,'margin-left','1%');

            CLICKED(ELEMENTED,()=>{
               
                NAVIGATOR('Yes',ANDROIDHOMEPAGE,'ANDROIDHOMEPAGE');

            });

        });

        TEXT(ELEMENT,'',Element.AppName,(ELEMENTEDS)=>{

            STYLED(ELEMENTEDS,'text-align','right');
            STYLED(ELEMENTEDS,'margin-right','5%');

        });

    });
};