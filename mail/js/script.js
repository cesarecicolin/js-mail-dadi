const adminEmail = ["cece.caster@gmail.com", "trotolino3@gmail.com", "fantasia.97@gmail.com"]

const userEmail = prompt("inserire la propria email")

let found = false
for (let i = 0; i < adminEmail.length; i++)
{
    const curEmail = adminEmail[i]

    if (curEmail === userEmail)
    {
        found = true
    }
}

if (found === true )
{
    console.log("benvenuto nella tua area utente")
}
else
{
    console.log("l'email non corisponde")
}
