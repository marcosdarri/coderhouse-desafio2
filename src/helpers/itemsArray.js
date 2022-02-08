const items = [
  {
    id: "OcUaAukFDzn2N2OnOGKX",
    title: "Tulipan Violeta",
    description: "Este tipo de tulipan es el mas raro de nuestro vivero, proviene del este de Vietnam.",
    precio: "150",
    categoria: "tulipan",
    pictureUrl:
      "https://www.floreshermosas.top/wp-content/uploads/2019/05/tulipan-morado.jpg",
  },
  {
    id: "f4x0fLEZKviVlHjZx4zW",
    title: "Tulipan Rosada",
    description: "Este tipo de tulipan es el mas solicitado por nuestros clientes, aprovecha nuestra promocion de 3x2!",
    precio: "99",
    categoria: "tulipan",
    pictureUrl:
      "https://economiacircularverde.com/wp-content/uploads/2019/09/significado-de-los-tulipanes-6-300x225.jpg.webp",
  },
  {
    id: "Cb779oVz4XNiRXXnj2f3",
    title: "Tulipan Blanco",
    description: "Este tipo de tulipan es ideal para casamientos y eventos festivos.",
    precio: "120",
    categoria: "tulipan",
    pictureUrl:
      "https://economiacircularverde.com/wp-content/uploads/2019/09/rBVaSVuHs7-AZusVAAGUk3mG6gU046-300x300.jpg.webp",
  },

  {
    id: "MTv2fBay5ZJrhvNci8Wx",
    title: "Rosa Roja",
    description: "Sin lugar a dudas el producto mas solicitado de todo nuestro vivero, especial para regalos de San Valentin!",
    precio: "75",
    categoria: "rosa",
    pictureUrl:
      "https://www.mundoflores.net/imagenes/las-rosas-735x450.jpg",
  },
  {
    id: "JqtnJixofcNH7xqLhtLH",
    title: "Rosa Azul",
    description: "Este tipo de rosa es extremadamente rara de coseguir, nos enorgullecemos de decir que somos el unico vivero de Montevideo cultivandolas en este momento.",
    precio: "199",
    categoria: "rosa",
    pictureUrl:
      "https://t1.uc.ltmcdn.com/images/5/7/0/img_como_hacer_rosas_azules_naturales_43075_600.jpg",
  },
  {
    id: "l5M3yRjsNx42D2Ue7UhP",
    title: "Rosa Amarilla",
    description: "Aprovecha para pedir tu Rosa Amarilla por tiempo limitado!",
    precio: "85",
    categoria: "rosa",
    pictureUrl:
      "https://s1.eestatic.com/2020/06/03/curiosidades/significado/flores-plantas-curiosidades_494962046_153098316_1024x576.jpg",
  },
];

export const getFetch = () => new Promise((res, rej) => {
  //acciones
  let condition = true;
  if (condition) {
    setTimeout(() => {
      res(items);
    }, 2000);
  } else {
    rej("404 not found");
  }
});


