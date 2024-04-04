
let eded = parseInt(prompt("Daxil edin:"));
let quvvet = 1;
for (let i = 0; quvvet < eded; i++) {
    quvvet *= 3;
}

if (quvvet === eded) {
    alert(eded + " 3-ün quvvətidir.");
} else {
    alert(eded + " 3-ün quvvəti deyil.");
}