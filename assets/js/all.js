const blueBox = document.querySelector(".blueBox")

gsap.to(blueBox, {
    x:500,
    duration:3,
    rotation: 180,
    backgroundColor: "red",
    ease: "bounce.in"
})
console.log(444)