const customers = [
  {
    image: "image1.webp",
    name: "Person one",
    comment: "very good service, good conductivity and ambience ",
  },
  {
    image: "image2.webp",
    name: "Person two",
    comment: "strong service, good conductivity and ambience",
  },
  {
    image: "image3.webp",
    name: "Person three",
    comment: "bad service, could do better",
  },
  {
    image: "image2.webp",
    name: "Person four",
    comment: "the App keeps breaking, i suggest lazing loading for optimiztion",
  },
  {
    image: "image1.webp",
    name: "Person five",
    comment:
      "the computer was working at first but suddle blackedout, i think the delivery driver must has dropped the delivery",
  },
  {
    image: "image3.webp",
    name: "Person six",
    comment: "i want a refund asap, terrible service and trash delivery driver",
  },
];
const commentDiv = document.getElementById("allCustomer");
let customerName = document.getElementById("customerName");
let customerImage = document.getElementById("customerImage");
let customerComment = document.getElementById("customerComment");
let customerIndex = 0;

function updateCustomer() {
  const { name, image, comment } = customers[customerIndex];
  customerName.textContent = name;
  customerImage.src = image;
  customerComment.textContent = comment;
}
updateCustomer();
document.getElementById("prevButton").addEventListener("click", () => {
  customerIndex = (customerIndex - 1 + customers.length) % customers.length;
  updateCustomer();
  console.log(customerIndex);
});

document.getElementById("nextButton").addEventListener("click", () => {
  customerIndex = (customerIndex + 1) % customers.length;
  updateCustomer();
});
