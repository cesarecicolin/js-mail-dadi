const userNumber = Math.floor(Math.random() * 6) + 1;

const pcNUmber = Math.floor(Math.random() * 6) + 1;


console.log(userNumber, pcNUmber)

if (userNumber < pcNUmber)
{
    alert("HAI PERSO!!!")
}
else if (userNumber > pcNUmber)
{
    alert("HAI VINTO!!!!")
}
else
{
    alert("pareggio")
}
