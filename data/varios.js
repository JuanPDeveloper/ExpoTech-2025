const $botonLike = document.getElementById("botonLike")
const $botonLike2 = document.getElementById("botonLike2")
const $botonLike3 = document.getElementById("botonLike3")
const $botonLikeIcon1 = document.getElementById("botonLikeIcon1")
const $botonLikeIcon2 = document.getElementById("botonLikeIcon2")
const $botonLikeIcon3 = document.getElementById("botonLikeIcon3")

$botonLike.addEventListener("click", () => {
    if ($botonLike.style.backgroundColor === "red") {
        $botonLike.style.backgroundColor = "var(--white)";
        $botonLikeIcon1.style.fill = "black";
        $botonLike.style.color = "black";
    } else {
        $botonLike.style.backgroundColor = "red";
        $botonLikeIcon1.style.fill = "var(--white)";
        $botonLike.style.color = "var(--white)";
    }
})
$botonLike2.addEventListener("click", () => {
    if ($botonLike2.style.backgroundColor === "red") {
        $botonLike2.style.backgroundColor = "var(--white)";
        $botonLikeIcon2.style.fill = "black";
        $botonLike2.style.color = "black";
    } else {
        $botonLike2.style.backgroundColor = "red";
        $botonLikeIcon1.style.fill = "var(--white)";
        $botonLike2.style.color = "var(--white)";
    }
})
$botonLike3.addEventListener("click", () => {
    if ($botonLike3.style.backgroundColor === "red") {
        $botonLike3.style.backgroundColor = "var(--white)";
        $botonLikeIcon1.style.fill = "black";
        $botonLike3.style.color = "black";
    } else {
        $botonLike3.style.backgroundColor = "red";
        $botonLikeIcon1.style.fill = "var(--white)";
        $botonLike3.style.color = "var(--white)";
    }
})