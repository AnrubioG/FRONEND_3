const users = [
  {
    apodo: "Nepeta",
    email: "nepetalover123@gmail.com",
    mascotas: [
      { nombre: "Luna", edad: 3, color: "blanco y negro" },
      { nombre: "Simba", edad: 1, color: "naranja" },
      { nombre: "Mia", edad: 5, color: "gris" },
    ],
  },
  {
    apodo: "CatLady",
    email: "catlady999@yahoo.com",
    mascotas: [
      { nombre: "Tom", edad: 2, color: "gris y blanco" },
      { nombre: "Lucas", edad: 4, color: "negro" },
    ],
  },
  {
    apodo: "GatitoFeliz",
    email: "gatitofeliz22@hotmail.com",
    mascotas: [
      { nombre: "Cleo", edad: 1, color: "marrón" },
      { nombre: "Toby", edad: 6, color: "blanco" },
      { nombre: "Nina", edad: 2, color: "negro y blanco" },
    ],
  },
  {
    apodo: "ElGatoNegro",
    email: "elgatonegro@outlook.com",
    mascotas: [
      { nombre: "Oreo", edad: 3, color: "negro y blanco" },
      { nombre: "Milo", edad: 7, color: "naranja" },
    ],
  },
  {
    apodo: "GatitoTierno",
    email: "gatitotierno5555@gmail.com",
    mascotas: [
      { nombre: "Pelusa", edad: 2, color: "gris" },
      { nombre: "Kitty", edad: 4, color: "blanco y negro" },
      { nombre: "Loki", edad: 1, color: "marrón y blanco" },
    ],
  },
  {
    apodo: "CatQueen",
    email: "catqueen8888@hotmail.com",
    mascotas: [
      { nombre: "Fluffy", edad: 5, color: "blanco y gris" },
      { nombre: "Sasha", edad: 2, color: "marrón y blanco" },
    ],
  },
  {
    apodo: "Nepeta",
    email: "nepetaalegre7@yahoo.com",
    mascotas: [
      { nombre: "Punky", edad: 3, color: "naranja" },
      { nombre: "Zoe", edad: 1, color: "blanco" },
      { nombre: "Simón", edad: 4, color: "negro" },
    ],
  },
  {
    apodo: "GatoMimoso",
    email: "gatomimoso55@gmail.com",
    mascotas: [
      { nombre: "Leo", edad: 2, color: "blanco" },
      { nombre: "Coco", edad: 3, color: "negro y blanco" },
    ],
  },
];

// -------------- ejercicio 1 -------------- //
console.log(users[0].email);
console.log(users[2].apodo);
console.log(users[2].mascotas[2].color);

// desestructurado 1:
// let { email } = users[0];
// let { apodo } = users[2];
// let { color } = users[2].mascotas[2];

// console.log(email);
// console.log(apodo);
// console.log(color);

// desestructurado 2:
// const [primerUsuario, , tercerUsuario] = users;
// const { email } = primerUsuario;
// const { apodo, mascotas } = tercerUsuario;
// const [, segundoMascota] = mascotas;
// const { color } = segundoMascota;

// console.log(email);
// console.log(apodo);
// console.log(color);

// const [isOpen, setIsOpen] = useState(false)
// [ladoIzquierdoDelArroba, ladoDerechoDelArroba] = split("@")

// -------------- ejercicio 2 -------------- //
const [usersOne, , , usersFour] = users;
console.log(usersOne);
console.log(usersFour);

const { email, mascotas } = usersOne;
console.log(email);
console.log(mascotas);

// -------------- ejercicio 3 -------------- //

const mascotas2 = mascotas.map((mascota) => {
  return mascota;
});

mascotas2.push({ apodo: "Nami", edad: 2, color: "negro" });
console.log(mascotas2);
console.log(mascotas);

// -------------- ejercicio 4 -------------- //

function saludar({ name, cantMascotas }) {
  return `El Usuario ${name} tiene ${cantMascotas} mascotas`;
}

console.log(saludar({ name: "angela", cantMascotas: 5 }));

// -------------- ejercicio 5 -------------- //

const saludarUsuarios = users.map((usuario) => {
  return saludar({
    name: usuario.apodo,
    cantMascotas: usuario.mascotas.length,
  });
});

let suma = (acc, user) => acc + user.mascotas.length;
// let cantMascotas = users.map((user) => {
//   return user.mascotas.length;
// });
// const sumaMascotas = cantMascotas.reduce(suma);

const sumaMascotas = users.reduce(suma, 0);

console.log(saludarUsuarios);
// console.log(cantMascotas);
console.log(sumaMascotas);
