const moviesLists = [
  {
    title: 'Sigue viendo tus series y peliculas',
    movies: [
      {
        title: 'Greys Anatomy',
        description:
          'El drama médico de alta intensidad, ahora en su 12a temporada, sigue la vida personal y profesional de un grupo de médicos en el Grey...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/04f99fe496a458eaed766284a6da32f0a0a2536da58b955b30a5303caf74f2c8._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2016,
        clasification: '13',
      },
      {
        title: 'Shark Tank Mexico',
        description:
          'Produzido em mais de 30 países, vencedor do Emmy de 2014 a 2017, esta é a 3ª temporada no México. Cinco magnatas apostam na ideia...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/40680b769618fe2dce29a610aacd03cce5465540efaf3d32fb671a398e0d56a2._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2016,
        clasification: 'SC',
      },
      {
        title: 'Tod@s caen',
        description:
          'Adán (Omar Chaparro) y Mía (Martha Higareda) son dos estrategas que quieren enseñarles a sus respectivos amigos las reglas para ganar el...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/baaf94d2dfab4ed5b622fdfb4f63eba76a9903325fb176eea4af380c1fa1e47c._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2019,
        clasification: '13',
      },
      {
        title: 'Blitz',
        description:
          'Blitz es un asesino en serie de Londres que está matando a agentes de la policía. El inspector jefe Roberts y el sargento Brant, un duro,...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6e3f176db7a69bf724ffce5d6c74bca82c5537e791dcaebfc930792a6f46d6be._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2011,
        clasification: '18',
      },
      {
        title: 'Transporter 3',
        description:
          'Frank Martin es un indiscutible especialista en entregas de alto riesgo. Pero en esta ocasion se vera obligado, bajo amenazas, a trasladar dos...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ecc2b4e8685e8543dc0e012221ea4536ce3dead56cefb632d04320aea1034271._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2008,
        clasification: 'Todo',
      },
      {
        title: 'Boyka: Invicto 4',
        description:
          'Boyka es un luchador de boxeo que se encuentra en mitad de una importante liga. Durante la competición se produce una muert',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/441f6e5f44569b4bf4df0639c82b88024edbd7b73b87cac3e7ba663011a8cd06._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2017,
        clasification: '18',
      },
      {
        title: 'Venom',
        description:
          'La historia de la evolución del personaje más enigmático, complejo y rudo de Marvel: ¡Venom! Eddie Brock (Tom Hardy) es un hom...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a105e9d2dbbb0c46a82f10a867bdf2184d2a8c8fdf1383cc4c6886d2094b94c2._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '13',
      },
      {
        title: 'Mr. Robot',
        description:
          'Esta serie sigue a Elliot Alderson (Rami Malek), un joven ingeniero de ciberseguridad que se involucra con el grupo secreto de hackers...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/16a3df3ffe348d03aec6da25f99f8f08290aecc2dc0f4497e5d5ea4604183d77._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '16',
      },
      {
        title: 'Aquaman',
        description:
          '"Aquaman" nos revela los orígenes de Arthur Curry, mitad humano y mitad atlante, que emprende el viaje de su vida para descubrir si...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/643999c095cdc50cc7fd93b570c334c4ba8a4ebec7ddd6e5cfa784026811084c._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '13',
      },
      {
        title: 'No Manches Frida 2',
        description:
          'En la continuación de la exitosa película No Manches Frida, el elenco estelar de la original (Omar Chaparro y Martha Higareda) y algunos...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d30d7144e2eb19f17cd946b7babe1956bfd1eec2783127e49cfd7ae21b690330._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2019,
        clasification: '16',
      },
      {
        title: 'La Monja',
        description:
          'Cuando una monja se suicida, un sacerdote y una novicia investigan. Juntos, descubren el profano secreto de la orden, la misma monja...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4750c08faf8071d7dd1d6b752532e2dd77c20123ad246c1c3351c0a0d14acb7e._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '18',
      },
      {
        title: 'Linea de fuego',
        description:
          'Un ex-agente de la DEA (Agencia Antidroga) que está viudo se retira a un pequeño pueblo para empezar una nueva vida con su hija de...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9626b6df34e924ed0569e40d7910c151e79445eb7437455ecfc07470c7da41a2._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2013,
        clasification: '18',
      },
      {
        title: 'Rampage: Devastación',
        description:
          'Cuando un experimento genético falla, desata supercriaturas que arrasan con la ciudad. El científico Davis corre para asegurar un antídot...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f59f817c2d9937116be36563aabef5cd33b7070ca628475cb5cfe6bdd5a5c0f2._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '13',
      },
    ],
  },

  {
    title: 'Amazon Originals',
    movies: [
      {
        title: 'Juego Perverse',
        description:
          'Cuando su hija adolescente confiesa haber matado impulsivamente a su mejor amiga, dos padres desesperados cubren el horrible crimen...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1be8e273d29ed16bc3946848bca6ea7b60841c51f694ce3272a3415e8abcafc7._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2020,
        clasification: '16',
      },
      {
        title: 'INVENCIBLE',
        description:
          'Mark Grayson hereda superpoderes a los diecisiete años y se une a su padre como uno de los mayores héroes de la Tierra. Todos sus...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7ebba60cc08ce9473268b4d94498c114c8e46d64d464221ece008d66bf5ea9c8._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2021,
        clasification: '18',
      },
      {
        title: 'LOL: Last One Laughing',
        description:
          '[Disponible 13 de diciembre] Nuevos episodios cada viernes. Eugenio Derbez arranca la segunda temporada de LOL con nuevos',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9d869bffef14bfceee07daa1d28abc5edced6215fef0ded85419e6443a12cc3b._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2019,
        clasification: '16',
      },
      {
        title: '7500',
        description:
          'Cuando unos terroristas intentan tomar el control de un vuelo de Berlín a París, un carismático joven copiloto lucha para salvar la',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7f778cbca54d2b1542089635390b7331016f2d7ed4ccf41f5c82655252c9dba8._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2020,
        clasification: '16',
      },
      {
        title: 'Cómo Sobrevivir Soltero',
        description:
          'Sebastián, un actor encasillado en un papel que hizo hace años, está a punto de casarse, la vida tiene otros planes para él. Justo cuando parec',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CSOL_S1/*/*_*/COVER_ART/CLEAN/CHAIR._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2020,
        clasification: '16',
      },
      {
        title: 'El Juego De Las Llaves',
        description:
          'Un encuentro casual entre Adriana y Sergio, excompañeros de prepa, marca el inicio del juego de las llaves donde 4 parejas se',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/096d1e8c5a01832a6071357aa639816b8a0473ec58e970658b3592304c6d99be._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2019,
        clasification: '18',
      },
      {
        title: 'Efectos colaterales del amor',
        description:
          'Un estudiante irremediablemente romántico del último año de bachillerato (Austin Abrams) se enamora de una misteriosa y nueva',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CHEM/*/*_*/COVER_ART/AUSTIN_KARA_BUS._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2020,
        clasification: '16',
      },
      {
        title: 'El Muro',
        description:
          'Un mortal thriller psicológico que sigue a dos soldados acorralados por un francotirador iraquí, separados únicamente por un muro qu',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6dafec3309cf5a9d6c8a79d461e1d8352a9a0a19767228e8438201daa1d183a5._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2017,
        clasification: '16',
      },
    ],
  },
  {
    title: 'Peliculas que te recomendamos',
    movies: [
      {
        title: 'Killer Elite',
        description:
          'Un ex componente del SEAL debera volver a la accion y reunir a su antiguo equipo para enfrentarse a un grupo de soldados renegados',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/69331781daca1edf60d85c49a1a3071954abfa31bc1e1298b7fc7e5f4ab02b94._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2011,
        clasification: '18',
      },
      {
        title: 'The Mechanic',
        description:
          'Arthur Bishop (Jason Statham) es un asesino profesional de elite, con un estricto codigo, y un talento unico para eliminar limpiamente a sus',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/60ab2f16bee1ee88c678ca40d1ef1a8a06a5e4b15056c457393344c4aa3f2b80._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2011,
        clasification: '18',
      },
      {
        title: 'Destino Final 5',
        description:
          'La Muerte vuelve para dar otro paseo salvaje en la última entrega de Destino Final. La Muerte tendrá un día ocupado, con acontecimientos',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f8ebad5e68ffaf2435d1beb6de7c2f409fc7b2a66cf532e00b6e524145638616._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2011,
        clasification: '18',
      },
      {
        title: 'El gran asalto',
        description:
          'El oficial de policía Mike Chandler (Nicolas Cage) y un joven civil se ven envueltos en un robo de un banco que están llevando a cabo',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f5cca5e31eff8b3b8162797c4db717fe9c0caf98693f20ca2a792574ff2aca0e._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '18',
      },
      {
        title: 'Baywatch: Guardianes de la Bahía',
        description:
          'El salvavidas Mitch Buchannon se une con un insolente nuevo integrante del equipo para desenmascarar un crimen que amenaza el',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8b8cc142ec489cfa103a4a8d637d949e3e5d72c1143253779a28f30393c74eb6._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2017,
        clasification: '18',
      },
      {
        title: 'El transportador recargado',
        description:
          'Frank es conocido como El Transportador, el mejor conductor y mercenario que el dinero puede comprar. Frank se rige por tres reglas: s',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2eee9be0703f758feb4e9401092aa704588577e87074aa7c8ae636dfa0c17fca._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2015,
        clasification: '13',
      },
    ],
  },


  ///////////////////////////////////////

  {
    title: 'Las series mas vistas en Prime Video',
    movies: [
      {
        title: 'Greys Anatomy',
        description:
          'El drama médico de alta intensidad, ahora en su 12a temporada, sigue la vida personal y profesional de un grupo de médicos en el Grey...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/04f99fe496a458eaed766284a6da32f0a0a2536da58b955b30a5303caf74f2c8._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2016,
        clasification: '13',
      },
      {
        title: 'Shark Tank Mexico',
        description:
          'Produzido em mais de 30 países, vencedor do Emmy de 2014 a 2017, esta é a 3ª temporada no México. Cinco magnatas apostam na ideia...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/40680b769618fe2dce29a610aacd03cce5465540efaf3d32fb671a398e0d56a2._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2016,
        clasification: 'SC',
      },
      {
        title: 'Tod@s caen',
        description:
          'Adán (Omar Chaparro) y Mía (Martha Higareda) son dos estrategas que quieren enseñarles a sus respectivos amigos las reglas para ganar el...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/baaf94d2dfab4ed5b622fdfb4f63eba76a9903325fb176eea4af380c1fa1e47c._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2019,
        clasification: '13',
      },
      {
        title: 'Blitz',
        description:
          'Blitz es un asesino en serie de Londres que está matando a agentes de la policía. El inspector jefe Roberts y el sargento Brant, un duro,...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6e3f176db7a69bf724ffce5d6c74bca82c5537e791dcaebfc930792a6f46d6be._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2011,
        clasification: '18',
      },
      {
        title: 'Transporter 3',
        description:
          'Frank Martin es un indiscutible especialista en entregas de alto riesgo. Pero en esta ocasion se vera obligado, bajo amenazas, a trasladar dos...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ecc2b4e8685e8543dc0e012221ea4536ce3dead56cefb632d04320aea1034271._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2008,
        clasification: 'Todo',
      },
      {
        title: 'Boyka: Invicto 4',
        description:
          'Boyka es un luchador de boxeo que se encuentra en mitad de una importante liga. Durante la competición se produce una muert',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/441f6e5f44569b4bf4df0639c82b88024edbd7b73b87cac3e7ba663011a8cd06._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2017,
        clasification: '18',
      },
      {
        title: 'Venom',
        description:
          'La historia de la evolución del personaje más enigmático, complejo y rudo de Marvel: ¡Venom! Eddie Brock (Tom Hardy) es un hom...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a105e9d2dbbb0c46a82f10a867bdf2184d2a8c8fdf1383cc4c6886d2094b94c2._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '13',
      },
      {
        title: 'Mr. Robot',
        description:
          'Esta serie sigue a Elliot Alderson (Rami Malek), un joven ingeniero de ciberseguridad que se involucra con el grupo secreto de hackers...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/16a3df3ffe348d03aec6da25f99f8f08290aecc2dc0f4497e5d5ea4604183d77._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '16',
      },
      {
        title: 'Aquaman',
        description:
          '"Aquaman" nos revela los orígenes de Arthur Curry, mitad humano y mitad atlante, que emprende el viaje de su vida para descubrir si...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/643999c095cdc50cc7fd93b570c334c4ba8a4ebec7ddd6e5cfa784026811084c._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '13',
      },
      {
        title: 'No Manches Frida 2',
        description:
          'En la continuación de la exitosa película No Manches Frida, el elenco estelar de la original (Omar Chaparro y Martha Higareda) y algunos...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d30d7144e2eb19f17cd946b7babe1956bfd1eec2783127e49cfd7ae21b690330._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2019,
        clasification: '16',
      },
      {
        title: 'La Monja',
        description:
          'Cuando una monja se suicida, un sacerdote y una novicia investigan. Juntos, descubren el profano secreto de la orden, la misma monja...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4750c08faf8071d7dd1d6b752532e2dd77c20123ad246c1c3351c0a0d14acb7e._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '18',
      },
      {
        title: 'Linea de fuego',
        description:
          'Un ex-agente de la DEA (Agencia Antidroga) que está viudo se retira a un pequeño pueblo para empezar una nueva vida con su hija de...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9626b6df34e924ed0569e40d7910c151e79445eb7437455ecfc07470c7da41a2._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2013,
        clasification: '18',
      },
      {
        title: 'Rampage: Devastación',
        description:
          'Cuando un experimento genético falla, desata supercriaturas que arrasan con la ciudad. El científico Davis corre para asegurar un antídot...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f59f817c2d9937116be36563aabef5cd33b7070ca628475cb5cfe6bdd5a5c0f2._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '13',
      },
    ],
  },

  {
    title: 'Series que pensamos que te gustaran',
    movies: [
      {
        title: 'Juego Perverse',
        description:
          'Cuando su hija adolescente confiesa haber matado impulsivamente a su mejor amiga, dos padres desesperados cubren el horrible crimen...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1be8e273d29ed16bc3946848bca6ea7b60841c51f694ce3272a3415e8abcafc7._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2020,
        clasification: '16',
      },
      {
        title: 'INVENCIBLE',
        description:
          'Mark Grayson hereda superpoderes a los diecisiete años y se une a su padre como uno de los mayores héroes de la Tierra. Todos sus...',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7ebba60cc08ce9473268b4d94498c114c8e46d64d464221ece008d66bf5ea9c8._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2021,
        clasification: '18',
      },
      {
        title: 'LOL: Last One Laughing',
        description:
          '[Disponible 13 de diciembre] Nuevos episodios cada viernes. Eugenio Derbez arranca la segunda temporada de LOL con nuevos',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9d869bffef14bfceee07daa1d28abc5edced6215fef0ded85419e6443a12cc3b._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2019,
        clasification: '16',
      },
      {
        title: '7500',
        description:
          'Cuando unos terroristas intentan tomar el control de un vuelo de Berlín a París, un carismático joven copiloto lucha para salvar la',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7f778cbca54d2b1542089635390b7331016f2d7ed4ccf41f5c82655252c9dba8._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2020,
        clasification: '16',
      },
      {
        title: 'Cómo Sobrevivir Soltero',
        description:
          'Sebastián, un actor encasillado en un papel que hizo hace años, está a punto de casarse, la vida tiene otros planes para él. Justo cuando parec',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CSOL_S1/*/*_*/COVER_ART/CLEAN/CHAIR._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2020,
        clasification: '16',
      },
      {
        title: 'El Juego De Las Llaves',
        description:
          'Un encuentro casual entre Adriana y Sergio, excompañeros de prepa, marca el inicio del juego de las llaves donde 4 parejas se',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/096d1e8c5a01832a6071357aa639816b8a0473ec58e970658b3592304c6d99be._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2019,
        clasification: '18',
      },
      {
        title: 'Efectos colaterales del amor',
        description:
          'Un estudiante irremediablemente romántico del último año de bachillerato (Austin Abrams) se enamora de una misteriosa y nueva',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CHEM/*/*_*/COVER_ART/AUSTIN_KARA_BUS._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2020,
        clasification: '16',
      },
      {
        title: 'El Muro',
        description:
          'Un mortal thriller psicológico que sigue a dos soldados acorralados por un francotirador iraquí, separados únicamente por un muro qu',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6dafec3309cf5a9d6c8a79d461e1d8352a9a0a19767228e8438201daa1d183a5._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2017,
        clasification: '16',
      },
    ],
  },
  {
    title: 'Peluclas de suspenso',
    movies: [
      {
        title: 'Killer Elite',
        description:
          'Un ex componente del SEAL debera volver a la accion y reunir a su antiguo equipo para enfrentarse a un grupo de soldados renegados',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/69331781daca1edf60d85c49a1a3071954abfa31bc1e1298b7fc7e5f4ab02b94._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2011,
        clasification: '18',
      },
      {
        title: 'The Mechanic',
        description:
          'Arthur Bishop (Jason Statham) es un asesino profesional de elite, con un estricto codigo, y un talento unico para eliminar limpiamente a sus',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/60ab2f16bee1ee88c678ca40d1ef1a8a06a5e4b15056c457393344c4aa3f2b80._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2011,
        clasification: '18',
      },
      {
        title: 'Destino Final 5',
        description:
          'La Muerte vuelve para dar otro paseo salvaje en la última entrega de Destino Final. La Muerte tendrá un día ocupado, con acontecimientos',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f8ebad5e68ffaf2435d1beb6de7c2f409fc7b2a66cf532e00b6e524145638616._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2011,
        clasification: '18',
      },
      {
        title: 'El gran asalto',
        description:
          'El oficial de policía Mike Chandler (Nicolas Cage) y un joven civil se ven envueltos en un robo de un banco que están llevando a cabo',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f5cca5e31eff8b3b8162797c4db717fe9c0caf98693f20ca2a792574ff2aca0e._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2018,
        clasification: '18',
      },
      {
        title: 'Baywatch: Guardianes de la Bahía',
        description:
          'El salvavidas Mitch Buchannon se une con un insolente nuevo integrante del equipo para desenmascarar un crimen que amenaza el',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8b8cc142ec489cfa103a4a8d637d949e3e5d72c1143253779a28f30393c74eb6._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2017,
        clasification: '18',
      },
      {
        title: 'El transportador recargado',
        description:
          'Frank es conocido como El Transportador, el mejor conductor y mercenario que el dinero puede comprar. Frank se rige por tres reglas: s',
        image:
          'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2eee9be0703f758feb4e9401092aa704588577e87074aa7c8ae636dfa0c17fca._UR1920,1080_RI_SX356_FMwebp_.jpg',
        year: 2015,
        clasification: '13',
      },
    ],
  },
];

/*
{
    title: "",
    description:
      "",
    image:
      "",
    year: ,
    clasification: "",
  },
*/

const carouselData = [
  'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheGoodDoctor_S4/4f0b893e-a56e-45ff-b596-621653f16597._UR3000,600_SX1500_FMwebp_.jpeg',
  'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_SharkTankMexico_S5/c1470b87-c654-4cce-a7e6-f5d48c2a7941._UR3000,600_SX1500_FMwebp_.jpg',
  'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_SH_DEBRU_S2_POST/7176f11b-eec3-4435-b650-7cbec5ca2cb0._UR3000,600_SX1500_FMwebp_.jpg',
  'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Rogue/7bdc7c10-a361-48ac-a8ec-4d5742175a7f._UR3000,600_SX1500_FMwebp_.jpg',
  'https://m.media-amazon.com/images/G/01/digital/video/sonata/row_svod_familyguy/c62e2ffe-4774-4629-8aa8-473287fa53c7._UR3000,600_SX1500_FMwebp_.jpg',
  'https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_SH_Bones_S1_S12/0fcf9a4f-3366-4090-bc38-32a6f168dad3._UR3000,600_SX1500_FMwebp_.jpg',
  'https://m.media-amazon.com/images/G/01/digital/video/sonata/superhero_gl2_vampirediaries_magellan/f6f89653-ab07-43a3-b7f8-6f428798aed3._UR3000,600_SX1500_FMwebp_.jpg',
  'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Invincible_S1/1e085cb3-36bf-42c9-b98a-5d515d165e3f._UR3000,600_SX1500_FMwebp_.jpg',
  'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheGrandTour_S4/1cd7411a-6ae7-4619-94a7-0b90418d4646._UR3000,600_SX1500_FMwebp_.jpg',
];

module.exports = {
  moviesLists,
  carouselData,
};
