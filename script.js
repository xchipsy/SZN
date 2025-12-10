const items = [
  { name: "Africká cichlida<br><br>M", image: "ryby/30200.jpg", code: "LA1-30200", ean: "21302008", category: "Akvaristika"},
  { name: "Africká cichlida<br><br>L", image: "ryby/30100.jpg", code: "LA1-30100", ean: "21301001", category: "Akvaristika"},
  { name: "Africká cichlida<br><br>XL", image: "ryby/30300.jpg", code: "LA1-30300", ean: "21303005", category: "Akvaristika"},
  { name: "Africká cichlida<br><br>XXL", image: "ryby/30400.jpg", code: "LA1-30400", ean: "21304002", category: "Akvaristika"},
  { name: "Akara hnědá", latin: "Cleithracara maronii", image: "ryby/00100.jpg", code: "LA1-00100", ean: "21001000", category: "Akvaristika"},
  { name: "Akara modrá", latin: "Andinoacara pulcher var. electric blue", image: "ryby/00200.jpg", code: "LA1-00200", ean: "21002007", category: "Akvaristika"},
  { name: "Ampulárka argentinská", latin: "Ampullaria australis", image: "ryby/00400.jpg", code: "LA1-00400", ean: "21004001", category: "Akvaristika"},
  { name: "Bichirek kalabarský", latin: "Erpetoichthys calabaricus", image: "ryby/13191.jpg", code: "LA1-13191", ean: "21131912", category: "Akvaristika"},
  { name: "Bojovnice pestrá - samice",  latin: "Betta splendens female",  image: "ryby/01900.jpg",  code: "LA1-01900", ean: "21019005", category: "Akvaristika"},
  { name: "Bojovnice pestrá - samice COLOR",  latin: "Betta splendens female",  image: "ryby/02410.jpg",  code: "LA1-02410", ean: "21024108", category: "Akvaristika"},
  { name: "Bojovnice pestrá - samec",  latin: "Betta splendens male",  image: "ryby/02100.jpg",  code: "LA1-02100", ean: "21021008", category: "Akvaristika"},
  { name: "Bojovnice pestrá - samec COLOR",  latin: "Betta splendens male",  image: "ryby/02400.jpg",  code: "LA1-02400", ean: "21024009",  category: "Akvaristika"},
  { name: "Brotia pagodula", latin: "Brotia pagodula", image: "ryby/00410.jpg", code: "LA1-00410", ean: "21004100", category: "Akvaristika"},
  { name: "Cichlida papouščí", latin: "Cichlasoma red parrot", image: "ryby/07800.jpg", code: "LA1-07800", ean: "21078002", category: "Akvaristika"},
  { name: "Cichlidka papouščí", latin: "Apistogramma cacatuoides<br>var. double red", image: "ryby/00910.jpg", code: "LA1-00910", ean: "21009105", category: "Akvaristika"},
  { name: "Cichlidka Ramirezova", latin: "Mikrogeophagus ramirezi", image: "ryby/07600.jpg", code: "LA1-07600", ean: "21076008", category: "Akvaristika"},
  { name: "Cichlidka ramirezova<br>var. electric blue", latin: "Mikrogeophagus ramirezi", image: "ryby/13330.jpg", code: "LA1-13330", ean: "21133305", category: "Akvaristika"},
  { name: "Čichavec perleťový", latin: "Trichogaster leeri", image: "ryby/10800.jpg", code: "LA1-10800", ean: "21108006", category: "Akvaristika"},
  { name: "Čichavec šedý", latin: "Trichogaster trichopterus", image: "ryby/10810.jpg", code: "LA1-10810", ean: "21108105", category: "Akvaristika"},
  { name: "Čichavec šedý<br>XL", latin: "Trichogaster trichopterus", image: "ryby/10820.jpg", code: "LA1-10820", ean: "21108204", category: "Akvaristika"},
  { name: "Čichavec zakrslý", latin: "Colisa lalia", image: "ryby/10840.jpg", code: "LA1-10840", ean: "21108402", category: "Akvaristika"},
  { name: "Čichavec zakrslý<br>COLOR", latin: "Colisa lalia", image: "ryby/10850.jpg", code: "LA1-10850", ean: "21108501", category: "Akvaristika"},
  { name: "Čtverzubec trpasličí", latin: "Carinotetraodon travacoricus", image: "ryby/13060.jpg", code: "LA1-13060", ean: "21130601", category: "Akvaristika"},
  { name: "Dánio leopardí - dlouhoploutvé", latin: "Brachydanio frankei", image: "ryby/02700.jpg", code: "LA1-02700", ean: "21027000", category: "Akvaristika"},
  { name: "Dánio malabarské", latin: "Devario aequipinnatus", image: "ryby/02820.jpg", code: "LA1-02820", ean: "21028205", category: "Akvaristika"},
  { name: "Dánio myanmarské", latin: "Danio choprai", image: "ryby/02810.jpg", code: "LA1-02810", ean: "21028106", category: "Akvaristika"},
  { name: "Dánio pruhované-dlouhoploutvé", latin: "Brachydanio rerio", image: "ryby/02800.jpg", code: "LA1-02800", ean: "21028007", category: "Akvaristika"},
  { name: "Drobnoústka pruhovaná", latin: "Nannostomus beckfordi", image: "ryby/07000.jpg", code: "LA1-07000", ean: "21070006", category: "Akvaristika"},
  { name: "Duhounek vidloocasý", latin: "Pseudomugil furcatus", image: "ryby/38000.jpg", code: "LA1-38000", ean: "21380006", category: "Akvaristika"},
  { name: "Filopaludina sp.", latin: "Filopaludina sp.", image: "ryby/13270.jpg", code: "LA1-13270", ean: "21132704", category: "Akvaristika"},
  { name: "Gara rudohnědá", latin: "Garra rufa", image: "ryby/20400.jpg", code: "LA1-20400", ean: "21204005", category: "Akvaristika"},
  { name: "Halančík pestý", latin: "Aphyosemion australe", image: "ryby/13380.jpg", code: "LA1-13380", ean: "21133800", category: "Akvaristika"},
  { name: "Hlavačka čmeláčí", latin: "Brachygobius xanthozona", image: "ryby/20800.jpg", code: "LA1-20800", ean: "21208003", category: "Akvaristika"},
  { name: "Kančík červenooký", latin: "Heros severum", image: "ryby/32000.jpg", code: "LA1-32000", ean: "21320002", category: "Akvaristika"},
  { name: "Kančík příčnopruhý", latin: "Cichlasoma nigrofasciatum", image: "ryby/03100.jpg", code: "LA1-03100", ean: "21031007", category: "Akvaristika"},
  { name: "Kančík zelenooký", latin: "Cichlasoma sajica", image: "ryby/03200.jpg", code: "LA1-03200", ean: "21032004", category: "Akvaristika"},
  { name: "Kardinálka čínská", latin: "Tanichthys albonubes", image: "ryby/10500.jpg", code: "LA1-10500", ean: "21105005", category: "Akvaristika"},
  { name: "Koi kapr", latin: "Cyprinus carpio carpio", image: "ryby/12100.jpg", code: "LA1-12100", ean: "21121005", category: "Akvaristika"},
  { name: "Koi kapr<br>XXL", latin: "Cyprinus carpio carpio", image: "ryby/12300.jpg", code: "LA1-12300", ean: "21123009", category: "Akvaristika"},
  { name: "Krevetka<br>mix de luxe", latin: "Neocaridina mix de luxe", image: "ryby/13280.jpg", code: "LA1-13280", ean: "21132803", category: "Akvaristika"},
  { name: "Krevetka červená", latin: "Neocaridina red", image: "ryby/07200.jpg", code: "LA1-07200", ean: "21072000", category: "Akvaristika"},
  { name: "Krevetka", latin: "Neocaridina heteropoda<br>var. green/blue", image: "ryby/13288.jpg", code: "LA1-13288", ean: "21132889", category: "Akvaristika"},
  { name: "Krevetka", latin: "Neocaridina heteropoda<br>var. sakura", image: "ryby/13289.jpg", code: "LA1-13289", ean: "21132896", category: "Akvaristika"},
  { name: "Krevetka japonská", latin: "Caridina japonica", image: "ryby/13285.jpg", code: "LA1-13285", ean: "21132858", category: "Akvaristika"},
  { name: "Krevetka oranžová", latin: "Neocaridina heteropoda<br>var. yellow/orange", image: "ryby/13290.jpg", code: "LA1-13290", ean: "21132902", category: "Akvaristika"},
  { name: "Krevetka račí", latin: "Atyopsis gabonensis", image: "ryby/13283.jpg", code: "LA1-13283", ean: "21132834", category: "Akvaristika"},
  { name: "Krunýřovec červený", latin: "Ancistrus sp. red", image: "ryby/00550.jpg", code: "LA1-00550", ean: "21005503", category: "Akvaristika"},
  { name: "Krunýřovec guyanský", latin: "Hypostomus plecostomus", image: "ryby/05500.jpg", code: "LA1-05500", ean: "21055003", category: "Akvaristika"},
  { name: "Krunýřovec jednopruhý", latin: "Otocinclus affinis", image: "ryby/07400.jpg", code: "LA1-07400", ean: "21074004", category: "Akvaristika"},
  { name: "Krunýřovec<br>long fin", latin: "Ancistrus sp. long fin", image: "ryby/00540.jpg", code: "LA1-00540", ean: "21005404", category: "Akvaristika"},
  { name: "Krunýřovec", latin: "Ancistrus sp.", image: "ryby/00600.jpg", code: "LA1-00600", ean: "21006005", category: "Akvaristika"},
  { name: "Krunýřovec<br>L", latin: "Ancistrus sp.", image: "ryby/00520.jpg", code: "LA1-00520", ean: "21005206", category: "Akvaristika"},
  { name: "Krunýřovec<br>XL", latin: "Ancistrus sp.", image: "ryby/00560.jpg", code: "LA1-00560", ean: "21005602", category: "Akvaristika"},
  { name: "Krunýřovec velkoploutvý", latin: "Pterygoplichtys gibbiceps", image: "ryby/10200.jpg", code: "LA1-10200", ean: "21102004", category: "Akvaristika"},
  { name: "Krunýřovec zlatý", latin: "Ancistrus sp. gold", image: "ryby/00500.jpg", code: "LA1-00500", ean: "21005008", category: "Akvaristika"},
  { name: "Krunýřovec zlatý<br>XL", latin: "Ancistrus sp. gold", image: "ryby/00510.jpg", code: "LA1-00510", ean: "21005107", category: "Akvaristika"},
  { name: "Mečovka mexická - COLOR", latin: "Xiphophorus helleri", image: "ryby/11210.jpg", code: "LA1-11210", ean: "21112102", category: "Akvaristika"},
  { name: "Mečovka mexická", latin: "Xiphophorus helleri", image: "ryby/11300.jpg", code: "LA1-11300", ean: "21113000", category: "Akvaristika"},
  { name: "Neonka černá", latin: "Hyphessobrycon herbertaxelrodi", image: "ryby/05300.jpg", code: "LA1-05300", ean: "21053009", category: "Akvaristika"},
  { name: "Neonka červená", latin: "Paracheirodon axelrodi", image: "ryby/05600.jpg", code: "LA1-05600", ean: "21056000", category: "Akvaristika"},
  { name: "Neonka modrá", latin: "Paracheirodon simulans", image: "ryby/13150.jpg", code: "LA1-13150", ean: "21131509", category: "Akvaristika"},
  { name: "Neonka obecná", latin: "Paracheirodon innesi", image: "ryby/07700.jpg", code: "LA1-07700", ean: "21077005", category: "Akvaristika"},
  { name: "Neritina natalensis", latin: "Neritina natalensis", image: "ryby/07300.jpg", code: "LA1-07300", ean: "21073007", category: "Akvaristika"},
  { name: "Neritina parallela", latin: "Neritina parallela", image: "ryby/07310.jpg", code: "LA1-07310", ean: "21073106", category: "Akvaristika"},
  { name: "Pancéřníček zlatopásý XL", latin: "Corydoras aeneus/shultzei", image: "ryby/03310.jpg", code: "LA1-03310", ean: "21033100", category: "Akvaristika"},
  { name: "Pancéřníček kropenatý", latin: "Hoplosternum thoracatum", image: "ryby/04700.jpg", code: "LA1-04700", ean: "21047008", category: "Akvaristika"},
  { name: "Pancéřníček leopardí", latin: "Corydoras julii", image: "ryby/03400.jpg", code: "LA1-03400", ean: "21034008", category: "Akvaristika"},
  { name: "Pancéřníček malý", latin: "Corydoras pygmaeus", image: "ryby/03610.jpg", code: "LA1-03610", ean: "21036101", category: "Akvaristika"},
  { name: "Pancéřníček panda", latin: "Corydoras panda", image: "ryby/03700.jpg", code: "LA1-03700", ean: "21037009", category: "Akvaristika"},
  { name: "Pancéřníček skvrnitý", latin: "Corydoras paleatus", image: "ryby/03500.jpg", code: "LA1-03500", ean: "21035005", category: "Akvaristika"},
  { name: "Pancéřníček skvrnitý albín", latin: "Corydoras paleatus albin", image: "ryby/03600.jpg", code: "LA1-03600", ean: "21036002", category: "Akvaristika"},
  { name: "Pancéřníček venezuelský", latin: "Corydoras black venezuela", image: "ryby/03320.jpg", code: "LA1-03320", ean: "21033209", category: "Akvaristika"},
  { name: "Pancéřníček zelený", latin: "Corydoras aeneus/schultzei", image: "ryby/03300.jpg", code: "LA1-03300", ean: "21033001", category: "Akvaristika"},
  { name: "Pangas spodnooký", latin: "Pangasius sutchi", image: "ryby/07500.jpg", code: "LA1-07500", ean: "21075001", category: "Akvaristika"},
  { name: "Parmička černopruhá", latin: "Crossocheilus siamensis", image: "ryby/03800.jpg", code: "LA1-03800", ean: "21038006", category: "Akvaristika"},
  { name: "Parmička červenoocasá", latin: "Labeo bicolor", image: "ryby/05900.jpg", code: "LA1-05900", ean: "21059001", category: "Akvaristika"},
  { name: "Parnička červenoploutvá", latin: "Labeo frenatum", image: "ryby/06000.jpg", code: "LA1-06000", ean: "21060007", category: "Akvaristika"},
  { name: "Parmička čtyřpruhá", latin: "Puntius tetrazona", image: "ryby/01500.jpg", code: "LA1-01500", ean: "21015007", category: "Akvaristika"},
  { name: "Parmička čtyřpruhá<br>albín", latin: "Puntius tetrazona albin", image: "ryby/01510.jpg", code: "LA1-01510", ean: "21015106", category: "Akvaristika"},
  { name: "Parmička čtyřpruhá<br>mechová", latin: "Puntius tetrazona green", image: "ryby/01600.jpg", code: "LA1-01600", ean: "21016004", category: "Akvaristika"},
  { name: "Parmička Denisonova", latin: "Puntius denisonii", image: "ryby/13300.jpg", code: "LA1-13300", ean: "21133008", category: "Akvaristika"},
  { name: "Parmička duhová", latin: "Barbus/capoeta titteya", image: "ryby/01700.jpg", code: "LA1-01700", ean: "21017001", category: "Akvaristika"},
  { name: "Parmička nádherná", latin: "Barbus/puntius conchonius", image: "ryby/01800.jpg", code: "LA1-01800", ean: "21018008", category: "Akvaristika"},
  { name: "Parmička nádherná - COLOR", latin: "Barbus conchonius<br>var. special", image: "ryby/01810.jpg", code: "LA1-01810", ean: "21018107", category: "Akvaristika"},
  { name: "Parmička pětipruhá", latin: "Barbus/capoeta pentazona", image: "ryby/01300.jpg", code: "LA1-01300", ean: "21013003", category: "Akvaristika"},
  { name: "Parmička polopruhá", latin: "Barbus/capoeta schuberti", image: "ryby/01400.jpg", code: "LA1-01400", ean: "21014000", category: "Akvaristika"},
  { name: "Parmička příčnopruhá", latin: "Barbus melanampyx", image: "ryby/01850.jpg", code: "LA1-01850", ean: "21018503", category: "Akvaristika"},
  { name: "Parmička purpurová", latin: "Barbus/puntius nigrofasciata", image: "ryby/01830.jpg", code: "LA1-01830", ean: "21018305", category: "Akvaristika"},
  { name: "Parmička žraločí", latin: "Balantiocheilus melanopterus", image: "ryby/01200.jpg", code: "LA1-01200", ean: "21012006", category: "Akvaristika"},
  { name: "Paví očko - COLOR", latin: "Poecilia reticulata color", image: "ryby/08910.jpg", code: "LA1-08910", ean: "21089107", category: "Akvaristika"},
  { name: "Paví očko - samec", latin: "Poecilia reticulata", image: "ryby/08900.jpg", code: "LA1-08900", ean: "21089008", category: "Akvaristika"},
  { name: "Paví očko - samice", latin: "Poecilia reticulata", image: "ryby/08200.jpg", code: "LA1-08200", ean: "21082009", category: "Akvaristika"},
  { name: "Perlovka rudá", latin: "Hemichromis lifalili", image: "ryby/31000.jpg", code: "LA1-31000", ean: "21310003", category: "Akvaristika"},
  { name: "Peřovec kukaččí", latin: "Synodontis multipunctatus", image: "ryby/13220.jpg", code: "LA1-13220", ean: "21132209", category: "Akvaristika"},
  { name: "Pestřenec červený", latin: "Pelvicachromis pulcher", image: "ryby/07900.jpg", code: "LA1-07900", ean: "21079009", category: "Akvaristika"},
  { name: "Piraňa Nattererova", latin: "Pygocentrus nattereri", image: "ryby/39000.jpg", code: "LA1-39000", ean: "21390005", category: "Akvaristika"},
  { name: "Piskořka černá", latin: "Faunus ater", image: "ryby/13260.jpg", code: "LA1-13260", ean: "21132605", category: "Akvaristika"},
  { name: "Plata pestrá", latin: "Xiphophorus variatus", image: "ryby/11610.jpg", code: "LA1-11610", ean: "21116100", category: "Akvaristika"},
  { name: "Plata skvrnitá", latin: "Xiphophorus maculatus", image: "ryby/11500.jpg", code: "LA1-11500", ean: "21115004", category: "Akvaristika"},
  { name: "Plata skvrnitá - COLOR", latin: "Xiphophorus maculatus color", image: "ryby/11600.jpg", code: "LA1-11600", ean: "21116001", category: "Akvaristika"},
  { name: "Plata skvrnitá<br>var. korálová", latin: "Xiphophorus maculatus var. coral", image: "ryby/13490.jpg", code: "LA1-13490", ean: "21134906", category: "Akvaristika"},
  { name: "Přísavka thajská", latin: "Gyrinocheilus aymonieri", image: "ryby/04100.jpg", code: "LA1-04100", ean: "21041006", category: "Akvaristika"},
  { name: "Přísavník hřebenitý", latin: "Gastromyzon punctulatus", image: "ryby/20500.jpg", code: "LA1-20500", ean: "21205002", category: "Akvaristika"},
  { name: "Rájovec dlouhoploutvý", latin: "Macropodus opercularis", image: "ryby/06210.jpg", code: "LA1-06210", ean: "21062100", category: "Akvaristika"},
  { name: "Razbora espei", latin: "Trigonostigma espei", image: "ryby/10430.jpg", code: "LA1-10430", ean: "21104305", category: "Akvaristika"},
  { name: "Razbora galaxy", latin: "Microrasbora galaxy", image: "ryby/13460.jpg", code: "LA1-13460", ean: "21134609", category: "Akvaristika"},
  { name: "Razbora hengeli", latin: "Trigonostigma hengeli", image: "ryby/10440.jpg", code: "LA1-10440", ean: "21104404", category: "Akvaristika"},
  { name: "Razbora klínoskvrnná", latin: "Rasbora heteromorpha", image: "ryby/10400.jpg", code: "LA1-10400", ean: "21104008", category: "Akvaristika"},
  { name: "Razbora klínoskvrnná<br>černá", latin: "Rasbora heteromorpha black", image: "ryby/10410.jpg", code: "LA1-10410", ean: "21104107", category: "Akvaristika"},
  { name: "Razbora ranongská", latin: "Rasbora kubotai", image: "ryby/13470.jpg", code: "LA1-13470", ean: "21134708", category: "Akvaristika"},
  { name: "Razborka bornejská", latin: "Rasbora brigitæ", image: "ryby/13440.jpg", code: "LA1-13440", ean: "21134401", category: "Akvaristika"},
  { name: "Razborka trpasličí", latin: "Rasbora maculata", image: "ryby/10420.jpg", code: "LA1-10420", ean: "21104206", category: "Akvaristika"},
  { name: "Sekavec příčnopásý", latin: "Pangio kuhli kuhli", image: "ryby/36000.jpg", code: "LA1-36000", ean: "21360008", category: "Akvaristika"},
  { name: "Sekavka nádherná", latin: "Chromobotia macracanthus", image: "ryby/02600.jpg", code: "LA1-02600", ean: "21026003", category: "Akvaristika"},
  { name: "Sekavka nádherná<br>L", latin: "Chromobotia macracanthus", image: "ryby/02610.jpg", code: "LA1-02610", ean: "21026102", category: "Akvaristika"},
  { name: "Sekavka pákistánská", latin: "Botia lohachata", image: "ryby/02500.jpg", code: "LA1-02500", ean: "21025006", category: "Akvaristika"},
  { name: "Skalára amazonská - COLOR", latin: "Pterophyllum scalare var. color", image: "ryby/10120.jpg", code: "LA1-10120", ean: "21101205", category: "Akvaristika"},
  { name: "Skalára amazonská<br>M", latin: "Pterophyllum scalar", image: "ryby/10000.jpg", code: "LA1-10000", ean: "21100000", category: "Akvaristika"},
  { name: "Skalára amazonská<br>L", latin: "Pterophyllum scalar", image: "ryby/09900.jpg", code: "LA1-09900", ean: "21099007", category: "Akvaristika"},
  { name: "Skalára amazonská<br>XL", latin: "Pterophyllum scalar", image: "ryby/10100.jpg", code: "LA1-10100", ean: "21101007", category: "Akvaristika"},
  { name: "Skalára amazonská<br>XXL", latin: "Pterophyllum scalar", image: "ryby/09800.jpg", code: "LA1-09800", ean: "21098000", category: "Akvaristika"},
  { name: "Skalára vysoká", latin: "Pterophyllum altum", image: "ryby/10110.jpg", code: "LA1-10110", ean: "21101106", category: "Akvaristika"},
  { name: "Sumec sklovitý", latin: "Kryptopterus bicirrhis", image: "ryby/05800.jpg", code: "LA1-05800", ean: "21058004", category: "Akvaristika"},
  { name: "Surmovka vražedná", latin: "Anentome helena", image: "ryby/00700.jpg", code: "LA1-00700", ean: "21007002", category: "Akvaristika"},
  { name: "Terčovec", latin: "Symphysodon", image: "ryby/30800.jpg", code: "LA1-30800", ean: "21308000", category: "Akvaristika"},
  { name: "Tetra císařská", latin: "Nematobrycon palmeri", image: "ryby/07100.jpg", code: "LA1-07100", ean: "21071003", category: "Akvaristika"},
  { name: "Tetra citrónová", latin: "Hyphessobrycon pulchripinnis", image: "ryby/05400.jpg", code: "LA1-05400", ean: "21054006", category: "Akvaristika"},
  { name: "Tetra černá", latin: "Gymnocorymbus ternetzi", image: "ryby/04000.jpg", code: "LA1-04000", ean: "21040009", category: "Akvaristika"},
  { name: "Tetra černá<br>var. zlatá", latin: "Gymnocorybus ternetzi var. gold", image: "ryby/04010.jpg", code: "LA1-04010", ean: "21040108", category: "Akvaristika"},
  { name: "Tetra červená", latin: "Hyphessobrycon flammeus", image: "ryby/05200.jpg", code: "LA1-05200", ean: "21052002", category: "Akvaristika"},
  { name: "Tetra červenoústá", latin: "Hemigrammus rhodostomus", image: "ryby/04600.jpg", code: "LA1-04600", ean: "21046001", category: "Akvaristika"},
  { name: "Tetra darienská", latin: "Hyphessobrycon columbiana", image: "ryby/04900.jpg", code: "LA1-04900", ean: "21049002", category: "Akvaristika"},
  { name: "Tetra diamantová", latin: "Moenkhausia pittieri", image: "ryby/06800.jpg", code: "LA1-06800", ean: "21068003", category: "Akvaristika"},
  { name: "Tetra fantomová (černá)", latin: "Megalamphodus megalopterus", image: "ryby/06400.jpg", code: "LA1-06400", ean: "21064005", category: "Akvaristika"},
  { name: "Tetra Fredcochuova", latin: "Boehlkea fredcochui", image: "ryby/13340.jpg", code: "LA1-13340", ean: "21133404", category: "Akvaristika"},
  { name: "Tetra konžská", latin: "Phenacogrammus interruptus", image: "ryby/08000.jpg", code: "LA1-08000", ean: "21080005", category: "Akvaristika"},
  { name: "Tetra konžská<br>XL", latin: "Phenacogrammus interruptus", image: "ryby/08010.jpg", code: "LA1-08010", ean: "21080104", category: "Akvaristika"},
  { name: "Tetra kosočtverečná", latin: "Hemigrammus caudovittatus", image: "ryby/04400.jpg", code: "LA1-04400", ean: "21044007", category: "Akvaristika"},
  { name: "Tetra královská", latin: "Inpaichthys kerri", image: "ryby/05700.jpg", code: "LA1-05700", ean: "21057007", category: "Akvaristika"},
  { name: "Tetra královská superblue", latin: "Inpaichthys kerri var. superblue", image: "ryby/05710.jpg", code: "LA1-05710", ean: "21057106", category: "Akvaristika"},
  { name: "Tetra krvavá", latin: "Hyphessobrycon eques", image: "ryby/05100.jpg", code: "LA1-05100", ean: "21051005", category: "Akvaristika"},
  { name: "Tetra krvavá<br>závojová", latin: "Hyphessobrycon eques var. long fin", image: "ryby/05110.jpg", code: "LA1-05110", ean: "21051104", category: "Akvaristika"},
  { name: "Tetra křivopruhá", latin: "Thayeria boehlkea", image: "ryby/10700.jpg", code: "LA1-10700", ean: "21107009", category: "Akvaristika"},
  { name: "Tetra měděná", latin: "Hasemania nana", image: "ryby/04300.jpg", code: "LA1-04300", ean: "21043000", category: "Akvaristika"},
  { name: "Tetra ohnivá", latin: "Hyphessobrycon amandae", image: "ryby/04910.jpg", code: "LA1-04910", ean: "21049101", category: "Akvaristika"},
  { name: "Tetra ozdobná", latin: "Hyphessobrycon rosaceus", image: "ryby/05000.jpg", code: "LA1-05000", ean: "21050008", category: "Akvaristika"},
  { name: "Tetra ozdobná<br>var. white fin", latin: "Hyphessobrycon rosaceus", image: "ryby/13350.jpg", code: "LA1-13350", ean: "21133503", category: "Akvaristika"},
  { name: "Tetra paraguayská", latin: "Moenkhausia sanctaefilomenae", image: "ryby/06900.jpg", code: "LA1-06900", ean: "21069000", category: "Akvaristika"},
  { name: "Tetra průsvitná", latin: "Pristella maxillaris", image: "ryby/09700.jpg", code: "LA1-09700", ean: "21097003", category: "Akvaristika"},
  { name: "Tetra Sweglesova<br>Fantom červený", latin: "Megalamphodus sweglesi", image: "ryby/06500.jpg", code: "LA1-06500", ean: "21065002", category: "Akvaristika"},
  { name: "Tetra vláknoploutvá", latin: "Prionobrama filigera", image: "ryby/09600.jpg", code: "LA1-09600", ean: "21096006", category: "Akvaristika"},
  { name: "Tetra žhavá", latin: "Hemigrammus erythrozonus /gracil", image: "ryby/04500.jpg", code: "LA1-04500", ean: "21045004", category: "Akvaristika"},
  { name: "Trnovec bělopruhý", latin: "Platydoras costatus", image: "ryby/37000.jpg", code: "LA1-37000", ean: "21370007", category: "Akvaristika"},
  { name: "Tylomelania sp.", latin: "Tylomelania sp.", image: "ryby/00420.jpg", code: "LA1-00420", ean: "21004209", category: "Akvaristika"},
  { name: "Vrubozubec paví", latin: "Astronotus ocellatus", image: "ryby/01100.jpg", code: "LA1-01100", ean: "21011009", category: "Akvaristika"},
  { name: "Vrubozubec paví<br>XL", latin: "Astronotus ocellatus XL", image: "ryby/01110.jpg", code: "LA1-01110", ean: "21011108", category: "Akvaristika"},
  { name: "Závojnatka čínská", latin: "Carassius auratus", image: "ryby/02900.jpg", code: "LA1-02900", ean: "21029004", category: "Akvaristika"},
  { name: "Závojnatka čínská<br>jezírko", latin: "Carassius auratus", image: "ryby/20100.jpg", code: "LA1-20100", ean: "21201004", category: "Akvaristika"},
  { name: "Závojnatka čínská<br>teleskop", latin: "Carassius auratus var. telescop", image: "ryby/02910.jpg", code: "LA1-02910", ean: "21029103", category: "Akvaristika"},
  { name: "Závojnatka čínská<br>XL", latin: "Carassius auratus", image: "ryby/02920.jpg", code: "LA1-02920", ean: "21029202", category: "Akvaristika"},
  { name: "Živorodka Endlerova", latin: "Poecilia endler/wingei", image: "ryby/08100.jpg", code: "LA1-08100", ean: "21081002", category: "Akvaristika"},
  { name: "Živorodka Endlerova - COLOR", latin: "Poecilia endler/wingei color", image: "ryby/08110.jpg", code: "LA1-08110", ean: "21081101", category: "Akvaristika"},
  { name: "Živorodka ostrotlamá<br>Black molly", latin: "Poecilia sphenops", image: "ryby/09300.jpg", code: "LA1-09300", ean: "21093005", category: "Akvaristika"},
  { name: "Živorodka ostrotlamá<br>Gold molly", latin: "Poecilia sphenops", image: "ryby/13180.jpg", code: "LA1-13180", ean: "21131806", category: "Akvaristika"},
  { name: "Živorodka ostrotlamá<br>mix", latin: "Poecilia sphenops", image: "ryby/09400.jpg", code: "LA1-09400", ean: "21094002", category: "Akvaristika"},
  { name: "Živorodka širokoploutvá", latin: "Poecilia latipinna", image: "ryby/08150.jpg", code: "LA1-08150", ean: "21081507", category: "Akvaristika"},
  { name: "Živorodka velkoploutvá", latin: "Poecilia velifera", image: "ryby/09500.jpg", code: "LA1-09500", ean: "21095009", category: "Akvaristika"},

  { name: "Myš",  latin: "Mus musculus",  image: "savci/mys.png",  code: "LA5-00100", ean: "25001006", category: "Savci"},
  { name: "Myš barevná",  latin: "Mus musculus",  image: "savci/mysbar.png",  code: "LA5-00110", ean: "25001105",  category: "Savci"},
  { name: "Myš holátko",  latin: "Mus musculus",  image: "savci/hole.png",  code: "LA5-00200", ean: "25002003",  category: "Savci"},
  { name: "Potkan",  latin: "Rattus norvegicus",  image: "savci/potkan.png",  code: "LA5-00300", ean: "25003000",  category: "Savci"},
  { name: "Potkan dumbo",  latin: "Rattus norvegicus",  image: "savci/dumbo.png",  code: "LA5-00510", ean: "25005004", category: "Savci"},
  { name: "Potkan nunu",  latin: "Rattus norvegicus",  image: "savci/nunu.png",  code: "LA5-00500", ean: "25005103",  category: "Savci"},
  { name: "Mastomyš",  latin: "Mastomys natalensis",  image: "savci/mastomys.png",  code: "LA5-00900", ean: "25009002", category: "Savci"},
  { name: "Křeček roborowski",  latin: "Phodopus roborowski",  image: "savci/robor.png",  code: "LA5-00800", ean: "25008005", category: "Savci"},
  { name: "Křeček džungarský",  latin: "Phodopus sungorus",  image: "savci/dzungar.png",  code: "LA5-00700", ean: "25007008", category: "Savci"},
  { name: "Křeček syrský",  latin: "Mesocricetus auratus",  image: "savci/syrsky.png",  code: "LA5-00600", ean: "25006001", category: "Savci"},
  { name: "Pískomil mongolský",  latin: "Meriones unguiculatus",  image: "savci/piskomil.png",  code: "LA5-02100", ean: "25021004", category: "Savci"},
  { name: "Osmák degu",  latin: "Octodon degus",  image: "savci/osmak.png",  code: "LA5-02200", ean: "25022001", category: "Savci"},
  { name: "Morče domácí",  latin: "Cavia porcellus",  image: "savci/morce.png",  code: "LA5-01100", ean: "25011005",  category: "Savci"},
  { name: "Morče domácí - skinny",  latin: "Cavia porcellus",  image: "savci/morceskinny.png",  code: "LA5-01300", ean: "25013009", category: "Savci"},
  { name: "Králík zakrslý",  latin: "Oryctolagus cunniculus",  image: "savci/kralik.jpg",  code: "LA5-03000", ean: "25030006", category: "Savci"},
  { name: "Činčila vlnatá",  latin: "Chinchilla lanigera",  image: "savci/cincila.png",  code: "LA5-04200", ean: "25042009", category: "Savci"},
  { name: "Ježek bělobřichý",  latin: "Atelerix albiventris",  image: "savci/jezek.png",  code: "LA5-04500", ean: "25045000", category: "Savci"},
  { name: "Savec<br>na objednávku",  latin: "***",  image: "savci/tygr.jpg",  code: "LA5-10000", category: "Savci"},

  { name: "Agapornis fischerův", latin: "Agapornis fischeri", image: "ptaci/fischer.jpg", code: "LA2-01300", ean: "22013002", category: "Ptáci" },
  { name: "Agapornis růžovohrdlý", latin: "Agapornis roseicollis", image: "ptaci/rosa.jpg", code: "LA2-01320", ean: "22013200", category: "Ptáci" },
  { name: "Agapornis škraboškový", latin: "Agapornis personatus", image: "ptaci/skrab.jpg", code: "LA2-01310", ean: "22013101", category: "Ptáci" },
  { name: "Amadina gouldová", latin: "Erythrura gouldiae", image: "ptaci/amadina.jpg", code: "LA2-02700", ean: "22027009", category: "Ptáci" },
  { name: "Andulka vlnkovaná", latin: "Melopsittacus undulatus", image: "ptaci/andulka.jpg", code: "LA2-00100", ean: "22001009", category: "Ptáci" },
  { name: "Chůvička japonská", latin: "Lonchura domestica", image: "ptaci/chuvicka.jpg", code: "LA2-00500", ean: "22005007", category: "Ptáci" },
  { name: "Holoubek diamantový", latin: "Geopelia cuneata", image: "ptaci/holub.jpg", code: "LA2-02600", ean: "22026002", category: "Ptáci" },
  { name: "Kakariki rudočelý", latin: "Cyanoramphus novaezelandiae", image: "ptaci/kakariki.jpg", code: "LA2-01500", ean: "22015006", category: "Ptáci" },
  { name: "Kanárek domácí", latin: "Serinus canaria domestica", image: "ptaci/kanar.jpg", code: "LA2-00400", ean: "22004000", category: "Ptáci" },
  { name: "Korela chocholatá", latin: "Nymphicus hollandicus", image: "ptaci/korela.jpg", code: "LA2-01100", ean: "22011008", category: "Ptáci" },
  { name: "Papoušek zpěvavý", latin: "Psephotus haematonotus", image: "ptaci/zpev.jpg", code: "LA2-02300", ean: "22023001", category: "Ptáci" },
  { name: "Rosela pestrá", latin: "Platycercus eximius", image: "ptaci/rozela.jpg", code: "LA2-02200", ean: "22022004", category: "Ptáci" },
  { name: "Rýžovník šedý", latin: "Lonchura oryzivora", image: "ptaci/ryzovnik.jpg", code: "LA2-02100", ean: "22021007", category: "Ptáci" },
  { name: "Zebřička pestrá", latin: "Taeniopygia guttata", image: "ptaci/zebricka.jpg", code: "LA2-00300", ean: "22003003", category: "Ptáci" },
  { name: "Pták<br>na objednávku", latin: "***", image: "ptaci/sup.jpg", code: "LA2-10000", category: "Ptáci" },

  { name: "Agama vousatá",  latin: "Pogona vitticeps",  image: "tera/agama.jpg",  code: "LA7-00500", ean: "27005002", category: "Teraristika"},
  { name: "Chameleon jemenský",  latin: "Chamaeleo calyptratus",  image: "tera/chameleon.jpg",  code: "LA7-00100", ean: "27001004", category: "Teraristika"},
  { name: "Gekončík noční",  latin: "Eublepharis macularius",  image: "tera/gekoncik.jpg",  code: "LA7-00700", ean: "27007006", category: "Teraristika"},
  { name: "Pagekon řasnatý",  latin: "Correlophus ciliatus",  image: "tera/rasnaty.jpg",  code: "LA7-00710", ean: "27007105", category: "Teraristika"},
  { name: "Krajta královská",  latin: "Python regius",  image: "tera/krajta.jpg",  code: "LA7-01100", ean: "27011003", category: "Teraristika"},
  { name: "Užovka červená",  latin: "Elaphe guttata",  image: "tera/uzovka.jpg",  code: "LA7-01300", ean: "27013007", category: "Teraristika"},
  { name: "Želva stepní",  latin: "Testudo horsfieldii",  image: "tera/stepni.jpg",  code: "LA7-02200", ean: "27022009", category: "Teraristika"},
  { name: "Želva pardálí",  latin: "Stigmochelys pardalis",  image: "tera/pardali.jpg",  code: "LA7-02100", ean: "27021002", category: "Teraristika"},
  { name: "Želva",  latin: "Pseudemys concinna/<br>floridana peninsularis",  image: "tera/peninsularis.jpg",  code: "LA7-02310", ean: "27023105", category: "Teraristika"},
  { name: "Želva",  latin: "Pseudemys concinna/<br>floridana hieroglyphica",  image: "tera/hieroglyfica.jpg",  code: "LA7-02320", ean: "27023204", category: "Teraristika"},
  { name: "Želva",  latin: "Pseudemys nelsoni",  image: "tera/nelsoni.jpg",  code: "LA7-02340", ean: "27023402", category: "Teraristika", orderOnly: true},
  { name: "Želva mapová",  latin: "Graptemys pseudogeographica kohnii",  image: "tera/mapova.jpg",  code: "LA7-02500", ean: "27025000", category: "Teraristika"},
  { name: "Štír",  latin: "Heterometrus petersii",  image: "tera/stir.jpg",  code: "LA7-04130", ean: "27041307", category: "Teraristika"},
  { name: "Sklípkan",  latin: "Grammostola",  image: "tera/grammostola.jpg",  code: "LA7-04200", ean: "27042007", category: "Teraristika"},
  { name: "Sklípkan",  latin: "Acanthoscurria geniculata",  image: "tera/geniculata.jpg",  code: "LA7-04210", ean: "27042106", category: "Teraristika"},
  { name: "Sklípkan",  latin: "Brachypelma smithi",  image: "tera/smithi.jpg",  code: "LA704220-", ean: "27042205", category: "Teraristika"},
  { name: "Sklípkan",  latin: "Brachypelma vagans",  image: "tera/vagans.jpg",  code: "LA7-04230", ean: "27042304", category: "Teraristika"},
  { name: "Sklípkan",  latin: "Lasiodora parahybana",  image: "tera/parahybana.jpg",  code: "LA7-04250", ean: "27042502", category: "Teraristika"},
  { name: "Krab suchozemský",  latin: "Cardisoma armatum",  image: "tera/krab.jpg",  code: "LA7-05400", ean: "27054000", category: "Teraristika"},
  { name: "Krab",  latin: "Geosesarma sp. Vampire purple",  image: "tera/krab2.jpg",  code: "LA7-05500", ean: "27055007", category: "Teraristika"},
  { name: "Žebrovník Waltlův",  latin: "Pleurodeles waltl",  image: "tera/zebrovnik.jpg",  code: "LA7-05600", ean: "27056004", category: "Teraristika"},
  { name: "Terarijní zvíře<br>na objednávku",  latin: "***",  image: "tera/rex.jpg",  code: "LA7-10000", category: "Teraristika"},

  { name: "Cvrček domácí - 1 kus<br>M/L",  latin: "Acheta domestica",  image: "hmyz/cvr1.jpg",  code: "LA8-00140", ean: "28001409", category: "Hmyz"},
  { name: "Cvrček - krabička<br>MIKRO",  latin: "Acheta domestica",  image: "hmyz/cvrcek-s.jpg",  code: "LA8-00120", ean: "28001201", category: "Hmyz"},
  { name: "Cvrček - krabička<br>MALÝ ",  latin: "Acheta domestica",  image: "hmyz/cvrcek-m.jpg",  code: "LA8-00110", ean: "28001102", category: "Hmyz"},
  { name: "Cvrček - krabička<br>STŘEDNÍ / VELKÝ",  latin: "Acheta domestica",  image: "hmyz/cvrcek-l.jpg",  code: "LA8-00130", ean: "28001300", category: "Hmyz"},
  { name: "Saranče stěhovavá - 1 kus",  latin: "Locusta migratorie",  image: "hmyz/sarance.jpg",  code: "LA8-00220", ean: "28002208", category: "Hmyz"},
  { name: "Saranče - krabička",  latin: "Locusta migratoria",  image: "hmyz/sarance_kr.jpg",  code: "LA8-00210", ean: "28002109", category: "Hmyz"},
  { name: "Šváb argentinský - 1 kus",  latin: "Blaptica dubia",  image: "hmyz/svab.jpg",  code: "LA8-00500", ean: "28005001", category: "Hmyz"},
  { name: "Šváb - krabička",  latin: "Blaptica dubia",  image: "hmyz/svab_kr.jpg",  code: "LA8-00510", ean: "28005100", category: "Hmyz"},
  { name: "Moučný červ - 50ml",  latin: "Tenebrio molitor",  image: "hmyz/moucny.jpg",  code: "LA8-00300", ean: "28003007", category: "Hmyz"},
  { name: "Moučný červ - krabička",  latin: "Tenebrio molitor",  image: "hmyz/cervi_kr.jpg",  code: "LA8-00310", ean: "28003106", category: "Hmyz"},
  { name: "Zophobas - 1 kus",  latin: "Zophobas morio",  image: "hmyz/morio.jpg",  code: "LA8-00400", ean: "28004004", category: "Hmyz"},
  { name: "Zophobas - krabička",  latin: "Zophobas morio",  image: "hmyz/zophobas_kr.jpg",  code: "LA8-00410", ean: "28004103", category: "Hmyz"},

  { name: "Ucho vepřové", image: "pamlsky/ucho.jpg", code: "074-405", ean: "8595091734405", category: "Pamlsky" },
  { name: "Rypáček vepřový", image: "pamlsky/rypacek.jpg", code: "074-186", ean: "8595091780068", category: "Pamlsky" },
  { name: "Jehněčí noha", image: "pamlsky/jehnenoha.jpg", code: "G14-27405", ean: "4011905027401", category: "Pamlsky" },
  { name: "Rasco sušenky<span>mikro kost 2,5cm</span>", image: "pamlsky/mikrokost.jpg", code: "4904-68010", ean: "8595091774623", category: "Pamlsky" },
  { name: "Rasco sušenky<span>mini kost 3,5cm</span>", image: "pamlsky/minikost.jpg", code: "4904-68040", ean: "8595091774630", category: "Pamlsky" },
  { name: "Rasco sušenky<span>zvířátka mix 5,5cm</span>", image: "pamlsky/zviratka.jpg", code: "4904-68090", ean: "8595091774654", category: "Pamlsky" },
  { name: "Rasco sušenky<span>rollos morkový</span>", image: "pamlsky/rolos.jpg", code: "4904-68092", ean: "8595091778188", category: "Pamlsky" },
  { name: "Rasco buvolí kost<span>10cm</span>", image: "pamlsky/rk10.jpg", code: "4904-69215", ean: "8595091782956", category: "Pamlsky" },
  { name: "Rasco buvolí kost<span>15cm</span>", image: "pamlsky/rk15.jpg", code: "4904-69224", ean: "8595091782970", category: "Pamlsky" },
  { name: "Rasco buvolí kost<span>25cm</span>", image: "pamlsky/rk25.jpg", code: "4904-69253", ean: "8595091783014", category: "Pamlsky" },
  { name: "Rasco buvolí uzel<span>6cm</span>", image: "pamlsky/ru6.jpg", code: "4904-69005", ean: "8595091782895", category: "Pamlsky" },
  { name: "Rasco buvolí uzel<span>bílý 6cm</span>", image: "pamlsky/rub6.jpg", code: "4904-69105", ean: "8595091783052", category: "Pamlsky" },
  { name: "Rasco buvolí uzel<span>bílý 11cm</span>", image: "pamlsky/rub11.jpg", code: "4904-69115", ean: "8595091783076", category: "Pamlsky" },
  { name: "Rasco buvolí tyčinka<span>12,5cm</span>", image: "pamlsky/rbt.jpg", code: "4904-69503", ean: "8595091783021", category: "Pamlsky" },
  { name: "Rasco buvolí tyčinka<span>bílá 12,5cm</span>", image: "pamlsky/rbtb.jpg", code: "4904-69603", ean: "8595091783038", category: "Pamlsky" },
  { name: "Rasco buvolí kruh<span>bílý 8,9cm</span>", image: "pamlsky/rkb.jpg", code: "4904-69683", ean: "8595091783113", category: "Pamlsky" },
  { name: "Rasco Dental kříž<span>s chlorofylem 19cm</span>", image: "pamlsky/rch19.jpg", code: "4904-65212", ean: "8595091778225", category: "Pamlsky" },
  { name: "Rasco Dental kříž<span>s chlorofylem 12cm</span>", image: "pamlsky/rch12.jpg", code: "4904-65210", ean: "8595091778201", category: "Pamlsky" },
  { name: "Rasco Dental kříž<span>s propolisem 19cm</span>", image: "pamlsky/rp19.jpg", code: "4904-65202", ean: "8595091778218", category: "Pamlsky" },
  { name: "Rasco Dental kříž<span>s propolisem 12cm</span>", image: "pamlsky/rp12.jpg", code: "4904-65200", ean: "8595091778195", category: "Pamlsky" },
  { name: "Dentosaurus tyčinka<span>s propolisem 21cm</span>", image: "pamlsky/dp21.jpg", code: "5904-10104", ean: "8595091786053", category: "Pamlsky" },
  { name: "Dentosaurus tyčinka<span>s propolisem 12cm</span>", image: "pamlsky/dp12.jpg", code: "5904-10102", ean: "8595091786046", category: "Pamlsky" },
  { name: "Dentosaurus tyčinka<span>s propolisem 10cm</span>", image: "pamlsky/dp10.jpg", code: "5904-10101", ean: "8595091786039", category: "Pamlsky" },
  { name: "Dentosaurus krokodýl<span>se šunkou 6,5cm</span>", image: "pamlsky/ksm.jpg", code: "5904-10372", ean: "8595091786107", category: "Pamlsky" },
  { name: "Dentosaurus krokodýl<span>se šunkou 10,5cm</span>", image: "pamlsky/ksv.jpg", code: "5904-10374", ean: "8595091797066", category: "Pamlsky" },
  { name: "Dentosaurus tyčinka<span>s chlorofylem 21cm</span>", image: "pamlsky/dch21.jpg", code: "5904-10144", ean: "8595091786084", category: "Pamlsky" },
  { name: "Dentosaurus tyčinka<span>s chlorofylem 12cm</span>", image: "pamlsky/dch12.jpg", code: "5904-10142", ean: "8595091786077", category: "Pamlsky" },
  { name: "Dentosaurus tyčinka<span>s chlorofylem 10cm</span>", image: "pamlsky/dch10.jpg", code: "5904-10141", ean: "8595091786060", category: "Pamlsky" },
  { name: "Dentosaurus krokodýl<span>s chlorofylem 6,5cm</span>", image: "pamlsky/kchm.jpg", code: "5904-10342", ean: "8595091786091", category: "Pamlsky" },
  { name: "Dentosaurus krokodýl<span>s chlorofylem 10,5cm</span>", image: "pamlsky/kchv.jpg", code: "5904-10344", ean: "8595091797059", category: "Pamlsky" },
  { name: "Dentosaurus kost<span>kalciová 8,5cm</span>", image: "pamlsky/kk.jpg", code: "5904-10382", ean: "8595091786114", category: "Pamlsky" },
  { name: "Mr.Dental kartáček<span>s kalciem 8,5cm</span>", image: "pamlsky/kak.jpg", code: "5904-50182", ean: "8595091786138", category: "Pamlsky" },
  { name: "Mr.Dental kartáček<span>s chlorofylem 8,5cm</span>", image: "pamlsky/kach.jpg", code: "5904-50142", ean: "8595091786121", category: "Pamlsky" },
  { name: "Miramar turbínky<span>s uherákovou příchutí</span>", image: "pamlsky/tu.jpg", code: "614-BW008", ean: "8595042652314", category: "Pamlsky" },
  { name: "Trixie Munchy tyčinka<span>barevná mix 12cm (50ks)</span>", image: "pamlsky/mun50.jpg", code: "G14-2609", ean: "4011905026091", category: "Pamlsky" },
  { name: "Miramar tyč natural<span>s yuccou</span>", image: "pamlsky/tyu.jpg", code: "614-BW310", ean: "8595042660357", category: "Pamlsky" },
  { name: "Miramar tyč natural<span>s dršťkami</span>", image: "pamlsky/tdr.jpg", code: "614-BW309", ean: "8595042660340", category: "Pamlsky" },
  { name: "Miramar kost natural<span>s yuccou</span>", image: "pamlsky/kyu.jpg", code: "614-BW301A", ean: "8595042660425", category: "Pamlsky" },
  { name: "Miramar kost natural<span>s L-carnitinem</span>", image: "pamlsky/kkar.jpg", code: "614-BW305A", ean: "8595042660449", category: "Pamlsky" },
  { name: "Trixie Munchy tyčinka<span>barevná mix 12cm (100ks)</span>", image: "pamlsky/mun100.jpg", code: "G14-2610", ean: "4011905026107", category: "Pamlsky" },
  { name: "Mlsoun čokosy<span>mléčné</span>", image: "pamlsky/mlec.jpg", code: "664-250039", ean: "8590467250039", category: "Pamlsky" },
  { name: "Mlsoun čokosy<span>čokoládové</span>", image: "pamlsky/coko.jpg", code: "664-25001", ean: "8590467250015", category: "Pamlsky" },
  { name: "Mlsoun čokosy<span>vanilkové</span>", image: "pamlsky/vani.jpg", code: "664-250022", ean: "8590467250022", category: "Pamlsky" },
  { name: "Mlsoun čokosy<span>hovězí</span>", image: "pamlsky/hov.jpg", code: "664-25004", ean: "8590467250046", category: "Pamlsky" },
  { name: "Mlsoun čokosy<span>lososové</span>", image: "pamlsky/los.jpg", code: "664-250053", ean: "8590467250053", category: "Pamlsky" },
  { name: "Tlapky uzené", image: "pamlsky/tlapky.jpg", code: "664-99453", ean: "8590467994537", category: "Pamlsky" },
  { name: "Trixie Premio Picknicks<span>hovězí 8cm</span>", image: "pamlsky/parho.jpg", code: "G14-2748", ean: "4011905274812", category: "Pamlsky" },
  { name: "Trixie Premio Picknicks<span>jehněčí 8cm</span>", image: "pamlsky/parje.jpg", code: "G14-2755", ean: "4011905275512", category: "Pamlsky" },
  { name: "Trixie rolka plněná<span>se sýrem 12cm</span>", image: "pamlsky/rosy.jpg", code: "G14-2757", ean: "4011905027579", category: "Pamlsky" },
  { name: "Trixie rolka plněná<span>se šunkou 12cm</span>", image: "pamlsky/rosu.jpg", code: "G14-2766", ean: "4011905027661", category: "Pamlsky" },
  { name: "Trixie buvolí míček baseball<span>4,5cm</span>", image: "pamlsky/tbm.jpg", code: "G14-2670", ean: "4011905026701", category: "Pamlsky" },
  { name: "Trixie buvolí tyčinka<span>kroucená 12cm</span>", image: "pamlsky/tbt.jpg", code: "G14-2615", ean: "4011905026152", category: "Pamlsky" },
  { name: "Trixie buolí bota<span>7cm</span>", image: "pamlsky/bb7.jpg", code: "G14-2629", ean: "4011905026299", category: "Pamlsky" },
  { name: "Trixie buvolí bota<span>12cm</span>", image: "pamlsky/bb12.jpg", code: "G14-2630", ean: "4011905026305", category: "Pamlsky" },
  { name: "Trixie buvolí kost<span>32cm</span>", image: "pamlsky/tbk.jpg", code: "G14-2651", ean: "4011905026510", category: "Pamlsky" },
  { name: "Trixie placička z býčích penisů<span> 45g</span>", image: "pamlsky/cake2.jpg", code: "G14-2704", ean: "4011905027043", category: "Pamlsky" },
  { name: "Trixie placička s dršťkami <span>8 cm, 45g</span>", image: "pamlsky/cake1.jpg", code: "G14-2703", ean: "4011905027036", category: "Pamlsky" },
{ name: "Trixie mini preclík<span> kuřecí maso 6x4cm 10g</span>", image: "pamlsky/precl.jpg", code: "G14-448933", ean: "4053032448933", category: "Pamlsky" },
{ name: "Trixie kost kachní s treskou <span>7,5cm, 9g</span>", image: "pamlsky/kosti.jpg", code: "G14-679283", ean: "4053032679283", category: "Pamlsky" },
{ name: "Trixie žvýkací cop 15cm<span>s býčím penisem</span>", image: "pamlsky/cop1.jpg", code: "G14-276489", ean: "4011905276489", category: "Pamlsky" },
{ name: "Trixie žvýkací cop 25cm<span>s býčím penisem</span>", image: "pamlsky/cop2.jpg", code: "G14-276496", ean: "4011905276496", category: "Pamlsky" },
{ name: "Trixie žvýkací rolka <span>kuřecí maso 150 g</span>", image: "pamlsky/rolka.jpg", code: "G14-315102", ean: "4011905315102", category: "Pamlsky" },
{ name: "Trixie tyč s dršťkami<span> 20 cm 80g</span>", image: "pamlsky/tycdr.jpg", code: "G14-027081", ean: "4011905027081", category: "Pamlsky" },
{ name: "Trixie tyč z hovězí kůže <span>salám 20cm 80g</span>", image: "pamlsky/tycsa.jpg", code: "G14-031811", ean: "4011905031811", category: "Pamlsky" },
{ name: "Trixie vegan kost <span>čelist 12 cm 35g</span>", image: "pamlsky/celist.jpg", code: "G14-312835", ean: "4011905312835", category: "Pamlsky" },
{ name: "Trixie vegan Safari", image: "pamlsky/safari.jpg", code: "G14-614321", ean: "4053032614321", category: "Pamlsky" },
{ name: "Trixie vegan kost 8,5cm <span>s mořskou řasu</span>", image: "pamlsky/kost01.jpg", code: "G14-312811", ean: "4011905312811", category: "Pamlsky" },
{ name: "Trixie vegan kost 12cm <span>s mořskou řasou</span>", image: "pamlsky/kost1.jpg", code: "G14-312828", ean: "4011905312828", category: "Pamlsky" },
{ name: "Trixie sýrová tyč S", image: "pamlsky/syrtyc1.jpg", code: "G14-312613", ean: "4011905312613", category: "Pamlsky" },
{ name: "Trixie sýrová tyč L", image: "pamlsky/syrtyc.jpg", code: "G14-312637", ean: "4011905312637", category: "Pamlsky" },
{ name: "Trixie hovězí kopyto plněné <span>115g</span>", image: "pamlsky/kopyto.jpg", code: "G14-2763", ean: "4011905027630", category: "Pamlsky" },
{ name: "Trixie buvolí roh plněný <span>rohovinou a šlachou 10-14cm</span>", image: "pamlsky/roh.jpg", code: "G14-277516", ean: "4011905277516", category: "Pamlsky" },
{ name: "Trixie žvýkací kosti z průdušnice<span>10cm 2x35g</span>", image: "pamlsky/prudus.jpg", code: "G14-27615", ean: "4011905276151", category: "Pamlsky" },
{ name: "Trixie hovězí penis<span>sušený 12cm</span>", image: "pamlsky/pizzle.jpg", code: "G14-2705", ean: "4011905027050", category: "Pamlsky" },
{ name: "Trixie hovězí penis sušený<span> 70-80 cm</span>", image: "pamlsky/mulec.jpg", code: "G14-027074", ean: "4011905027074", category: "Pamlsky" },
  { name: "Mlsoun mrkvičky", image: "pamlsky/mrk.jpg", code: "665-260090", ean: "8590467026009", category: "Pamlsky" },
  { name: "Mlsoun kukuřičky", image: "pamlsky/kuku.jpg", code: "664-02700", ean: "8590467027006", category: "Pamlsky" },
  { name: "Apetit tyčinka<span>pro hlodavce</span>", image: "pamlsky/atyc.jpg", code: "385-052", ean: "8595093501203", category: "Pamlsky" },
  { name: "Apetit srdce<span>pro hlodavce</span>", image: "pamlsky/asrd.jpg", code: "385-051", ean: "8595093500480", category: "Pamlsky" },
  { name: "Vitakraft lojová koule<span>pro ptáky</span>", image: "pamlsky/loj.jpg", code: "492-13567", ean: "3023610135679", category: "Pamlsky" },

  { name: "Ontario šunková kost<span>S</span>", image: "kosti/onts.jpg", code: "214-5900", ean: "8595091776825", category: "Kosti" },
  { name: "Ontario šunková kost<span>M</span>", image: "kosti/ontm.jpg", code: "214-5903", ean: "8595091776832", category: "Kosti" },
  { name: "Ontario šunková kost<span>L</span>", image: "kosti/ontl.jpg", code: "214-5906", ean: "8595091776849", category: "Kosti" },
  { name: "Ontario šunková kost<span>Brochette</span>", image: "kosti/ontb.jpg", code: "214-5910", ean: "8595091776856", category: "Kosti" },
  { name: "Rasco kost pečená<span>mini 140g</span>", image: "kosti/rpm.jpg", code: "4904-68500", ean: "8595091773923", category: "Kosti" },
  { name: "Rasco kost pečená<span>vepřová 211g</span>", image: "kosti/rps.jpg", code: "4904-68502", ean: "8595091773930", category: "Kosti" },
  { name: "Rasco kost zauzená<span>velikost M 1kg</span>", image: "kosti/rpv.jpg", code: "4904-68504", ean: "8595091774036", category: "Kosti" },
  { name: "Rasco koleno pečené<span>500g</span>", image: "kosti/rpk.jpg", code: "4904-68506", ean: "8595091773916", category: "Kosti" },
  { name: "Rasco koleno půlené<span>vakuované 2ks</span>", image: "kosti/rako.jpg", code: "4904-68589", ean: "8595091778409", category: "Kosti" },
  { name: "Kost Rasco šunková<span>střední M 1+1</span>", image: "kosti/rss.jpg", code: "4904-68592", ean: "8595091774678", category: "Kosti" },
  { name: "Kost Rasco šunková<span>velká L</span>", image: "kosti/rsv.jpg", code: "4904-68594", ean: "8595091774685", category: "Kosti" },
  { name: "Kost Rasco Premium<span>šunková</span>", image: "kosti/rasun.jpg", code: "4904-68509", ean: "8595091774029", category: "Kosti" },
  { name: "Alpha Spirit kost šunková<span>malá</span>", image: "kosti/a1.jpg", code: "944-30903", ean: "8437013576116", category: "Kosti" },
  { name: "Alpha Spirit kost šunková<span>střední</span>", image: "kosti/a2.jpg", code: "944-30905", ean: "8437013576109", category: "Kosti" },
  { name: "Alpha Spirit kost šunková<span>velká</span>", image: "kosti/a3.jpg", code: "944-30907", ean: "8437013576123", category: "Kosti" },

  { name: "Taška igelitová žlutá<span>Superzoo</span>", image: "ostatni/tas1.jpg", code: "REK-S001", ean: "2001509999916", category: "Ostatní" },
  { name: "Taška BIO<span>Superzoo</span>", image: "ostatni/tas4.jpg", code: "REK-S022", ean: "2001509999244", category: "Ostatní" },
  { name: "Taška papírová<span>Superzoo</span>", image: "ostatni/tas2.jpg", code: "REK-S011", ean: "2001509999145", category: "Ostatní" },
  { name: "Taška látková<span>Superzoo</span>", image: "ostatni/tas3.jpg", code: "REK-S019", ean: "2001509999213", category: "Ostatní" },
  { name: "Krabička Superzoo<span>MALÁ</span>", image: "ostatni/sz1.jpg", code: "REK-S027", ean: "2001509990272", category: "Ostatní" },
  { name: "Krabička Superzoo<span>VELKÁ</span>", image: "ostatni/sz2.jpg", code: "REK-S028", ean: "2001509990289", category: "Ostatní" },
  { name: "Krabice Vitakraft transportní<span>PTÁCI</span>", image: "ostatni/v1.jpg", code: "492-91461", ean: "4008239914613", category: "Ostatní" },
  { name: "Krabice Vitakraft transportní<span>KŘEČEK</span>", image: "ostatni/v2.jpg", code: "495-95032", ean: "4008239629913", category: "Ostatní" },
  { name: "Krabice Vitakraft transportní<span>MORČE / KRÁLÍK</span>", image: "ostatni/v3.jpg", code: "495-95033", ean: "4008239950338", category: "Ostatní" },
  { name: "Krabice Beaphar transportní<span>PTÁCI</span>", image: "ostatni/bea1.jpg", code: "245-140220", ean: "8711231140220", category: "Ostatní" },
  { name: "Krabice Beaphar Care+ transportní<span>HLODAVCI</span>", image: "ostatni/bea2.jpg", code: "245-14103", ean: "8711231141036", category: "Ostatní" },
  { name: "Probiotika Purina ProPlan Fortiflora<span>PES</span>", image: "ostatni/ffpes.jpg", code: "344-041012", ean: "8445290041012", category: "Ostatní" },
  { name: "Probiotika Purina ProPlan Fortiflora<span>KOČKA</span>", image: "ostatni/ffkocka.jpg", code: "343-025234", ean: "8445290025234", category: "Ostatní" },
  { name: "Trixie kalciový kámen<span>11cm / 40g</span>", image: "ostatni/kamen.jpg", code: "G12-50541", ean: "4011905505411", category: "Ostatní" },
  { name: "Rostlina JK malá<span>mix druhů 6cm</span>", image: "ostatni/jk.jpg", code: "8101-441269", ean: "8595159441269", category: "Ostatní" },

 { name: "Braktické rybičky<span>6-8cm 70g</span>", image: "ostatni/mraz.jpg", code: "0211-42026", ean: "4038358220265", category: "Ostatní" },


];

const container = document.getElementById("container");
const categoriesContainer = document.getElementById("categories");
const searchInput = document.getElementById("search");
const filterInstock = document.getElementById("filter-instock");
const storeIdInput = document.getElementById("store-id");
const saveStoreBtn = document.getElementById("save-store-id");
const storeMessage = document.getElementById("store-message");

let activeCategory = "Vše";
let storeId = localStorage.getItem("currentStoreId") || "";
storeIdInput.value = storeId;

const storeCurrentDisplay = document.createElement("div");
storeCurrentDisplay.style.marginTop = "5px";
storeCurrentDisplay.style.fontWeight = "bold";
storeCurrentDisplay.style.color = "#333";
document.getElementById("store-selector").appendChild(storeCurrentDisplay);

function updateStoreDisplay(id) {
  storeCurrentDisplay.textContent = id
    ? `Aktuálně přihlášená prodejna: ${id}`
    : "Není přihlášena žádná prodejna";
}
updateStoreDisplay(storeId);

const categories = ["Vše", ...new Set(items.map(i => i.category))];

function getStorageKey(storeId, itemCode) {
  return `stock_${storeId}_${itemCode}`;
}

function loadStock(storeId, code) {
  if (!storeId) return true;
  const val = localStorage.getItem(getStorageKey(storeId, code));
  return val === null ? true : val === "true";
}

function saveStock(storeId, code, inStock) {
  if (!storeId) return;
  localStorage.setItem(getStorageKey(storeId, code), inStock ? "true" : "false");
}

function createCategoryButtons() {
  categoriesContainer.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.classList.add("category-button");

    if (cat === activeCategory) btn.classList.add("active");

    btn.addEventListener("click", () => {
      activeCategory = cat;

      document.querySelectorAll(".category-button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const pravitko = document.getElementById("pravitko");
      if (pravitko) {
        pravitko.style.display = (cat === "Pamlsky") ? "block" : "none";
      }

      render();
    });

    categoriesContainer.appendChild(btn);
  });
}

function render() {
  container.innerHTML = "";
  const filterText = searchInput.value.toLowerCase();

  items.forEach(item => {
    if (activeCategory !== "Vše" && item.category !== activeCategory) return;

    const matchesSearch =
      item.name.toLowerCase().includes(filterText) ||
      (item.latin && item.latin.toLowerCase().includes(filterText)) ||
      item.code.toLowerCase().includes(filterText) ||
      (item.ean && item.ean.toLowerCase().includes(filterText));

    if (filterText && !matchesSearch) return;

    const inStock = loadStock(storeId, item.code);
    if (filterInstock.checked && !inStock) return;

    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.dataset.category = item.category;
    itemDiv.dataset.stock = inStock ? "instock" : "outstock";

    const card = document.createElement("div");
    card.className = "card";

    const front = document.createElement("div");
    front.className = "front";
    front.innerHTML = `
      <button class="toggle-stock ${inStock ? "instock" : "outstock"}">${inStock ? "✓" : "✗"}</button>
      <div class="item-code">${item.code}</div>
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="item-name"><strong>${item.name}</strong></div>
      ${item.orderOnly ? '<div class="item-orderonly">Na objednávku</div>' : ''}
      <div class="item-latin"><em>${item.latin || ''}</em></div>
    `;

    const back = document.createElement("div");
    back.className = "back";

    const idCode = document.createElement("div");
    idCode.className = "item-code";
    idCode.textContent = item.code;

    const qrCodeDiv = document.createElement("div");
    qrCodeDiv.className = "qrcode";

    back.appendChild(idCode);
    back.appendChild(qrCodeDiv);

    card.appendChild(front);
    card.appendChild(back);
    itemDiv.appendChild(card);
    container.appendChild(itemDiv);

    // --- Klik pro otáčení a generování QR
    let qrCreated = false;
    itemDiv.addEventListener("click", e => {
      if (!e.target.classList.contains("toggle-stock")) {
        // zavřít ostatní
        document.querySelectorAll(".item").forEach(el => {
          if (el !== itemDiv) el.classList.remove("flipped");
        });
        itemDiv.classList.toggle("flipped");

        if (!qrCreated && item.ean) {
          new QRCode(qrCodeDiv, {
            text: item.ean,
            width: 150,
            height: 150,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          qrCreated = true;
        }
      }
    });

    // --- Toggle skladem
    front.querySelector(".toggle-stock").addEventListener("click", e => {
      e.stopPropagation();
      const btn = e.target;
      const newStock = !(btn.textContent === "✓");
      btn.textContent = newStock ? "✓" : "✗";
      btn.classList.toggle("instock", newStock);
      btn.classList.toggle("outstock", !newStock);
      itemDiv.dataset.stock = newStock ? "instock" : "outstock";
      saveStock(storeId, item.code, newStock);
      if (filterInstock.checked && !newStock) itemDiv.style.display = "none";
    });
  });
}

// ✅ Debounce
let debounceTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(render, 200);
});
searchInput.addEventListener("focus", () => searchInput.select());
filterInstock.addEventListener("change", render);

// --- Uložení prodejny
saveStoreBtn.addEventListener("click", () => {
  const id = storeIdInput.value.trim();
  if (!id) {
    storeMessage.style.color = "red";
    storeMessage.textContent = "Zadejte prosím číslo prodejny.";
    return;
  }
  localStorage.setItem("currentStoreId", id);
  storeMessage.style.color = "green";
  storeMessage.textContent = `Číslo prodejny "${id}" uloženo.`;
  storeId = id;
  updateStoreDisplay(storeId);
  render();
  setTimeout(() => storeMessage.textContent = "", 3000);
});

// --- Inicializace
createCategoryButtons();
render();

// scroll button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });









