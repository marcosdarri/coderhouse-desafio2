const items = [
  {
    id: "1",
    title: "Flores",
    description: "Descripcion Uno",
    precio: "$1",
    categoria: "flor",
    pictureUrl:
      "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5e723bc25cafe8a3f89605a5/flores_0.jpg",
  },
  {
    id: "2",
    title: "Flores",
    description: "Descripcion Dos",
    precio: "$2",
    categoria: "flor",
    pictureUrl:
      "https://s1.eestatic.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-tierra_-planeta_499960581_154305912_1706x960.jpg",
  },
  {
    id: "3",
    title: "Flores",
    description: "Descripcion Tres",
    precio: "$3",
    categoria: "flor",
    pictureUrl:
      "https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830__340.jpg",
  },

  {
    id: "4",
    title: "Flores",
    description: "Descripcion Uno",
    precio: "$4",
    categoria: "rosa",
    pictureUrl:
      "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5e723bc25cafe8a3f89605a5/flores_0.jpg",
  },
  {
    id: "5",
    title: "Flores",
    description: "Descripcion Dos",
    precio: "$5",
    categoria: "rosa",
    pictureUrl:
      "https://s1.eestatic.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-tierra_-planeta_499960581_154305912_1706x960.jpg",
  },
  {
    id: "6",
    title: "Flores",
    description: "Descripcion Tres",
    precio: "$6",
    categoria: "rosa",
    pictureUrl:
      "https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830__340.jpg",
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


