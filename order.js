function confirmOrder() {
    let confirm = document.getElementById("confirm");
    let redvelvet = document.getElementById("redvelvet").value;
    let sponge = document.getElementById("sponge").value;
    let cheese = document.getElementById("cheese").value;
    let croissant = document.getElementById("croissant").value;
    let egg = document.getElementById("egg").value;
    let strudal = document.getElementById("strudal").value;

    let msg = "Your order of " + redvelvet + " Red Velvet Cakes, " + sponge + " Sponge Cakes, " + cheese + " Cheesecakes, " + croissant + " Croissants, " + egg + " Egg Tarts, and " + strudal + " Apple Strudals will be delivered shortly!";
    if (redvelvet == 0 && sponge == 0 && cheese == 0 && croissant == 0 && egg == 0 && strudal == 0) {
        msg = "Please order at least one item before submitting"
    }

    confirm.innerHTML = msg;
    confirm.style.display = "block";
}