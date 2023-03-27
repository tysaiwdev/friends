const friends = [
    {
        tag: 'nari',
        link: 'https://i.imgur.com/ej5iq14.png',
        avatar: 'https://discord.com/users/810949827659431936',
        id: '810949827659431936'
    },
    {
        tag: 'Shelby',
        link: 'https://i.imgur.com/HBr1Hqo.png',
        avatar: 'https://discord.com/users/827678600731033640',
        id: '827678600731033640'
    },
    {
        tag: 'bolinho do irelking',
        link: 'https://i.imgur.com/nsbvbKD.gif',
        avatar: 'https://discord.com/users/647464041517809705',
        id: '647464041517809705'
    },
    {
        tag: 'Miih',
        link: 'https://i.imgur.com/gEcu9Lp.gif',
        avatar: 'https://discord.com/users/1058576093940023458',
        id: '1058576093940023458'
    },
    {
        tag: 'Mitsuha Miyamizu',
        link: 'https://i.imgur.com/0Fm82EW.png',
        avatar: 'https://discord.com/users/401059198999461898',
        id: "401059198999461898"
    },
    {
        tag: 'Venus',
        link: 'https://i.imgur.com/3fAtzNg.png',
        avatar: 'https://discord.com/users/838056581224333334',
        id: '838056581224333334'
    },
    {
        tag: 'jubileu',
        link: 'https://i.imgur.com/P46rhag.png',
        avatar: 'https://discord.com/users/484081431841210399',
        id: '484081431841210399'
    },
    {
        tag: 'levi',
        link: 'https://i.imgur.com/cEzjE6s.png',
        avatar: 'https://discord.com/users/469933284822876171',
        id: '469933284822876171'
    },
    {
        tag: 'LkWar',
        link: 'https://i.imgur.com/DfCXi03.gif',
        avatar: 'https://discord.com/users/830824280739545139',
        id: '830824280739545139'
    },
    {
        tag: 'SnK',
        link: 'https://i.imgur.com/nJ364rc.png',
        avatar: 'https://discord.com/users/1051021305790611477',
        id: '1051021305790611477'
    },
    {
        tag: 'Ryuzaki',
        link: 'https://i.imgur.com/s9Tna8R.png',
        avatar: 'https://discord.com/users/422441608953462794',
        id: '422441608953462794'
    },
    {
        tag: 'Josuke',
        link: 'https://i.imgur.com/eIHSxss.png',
        avatar: 'https://discord.com/users/697139631409594518',
        id: '697139631409594518'
    },
    {
        tag: 'Flokiss',
        link: 'https://i.imgur.com/nqP9Zym.png',
        avatar: 'https://discord.com/users/1067197757279977522',
        id: '1067197757279977522'
    },
    {
        tag: 'Nyx',
        link: 'https://i.imgur.com/Vldeivn.gif',
        avatar: 'https://discord.com/users/769202745882050610',
        id: '769202745882050610'
    }
]

let content = document.getElementById('item-c')
let ctn2 = ' '
friends.forEach(p => {
    ctn2 += `<div class="content-item">
    <img class="user-icon" src="${p.link}">
    <a class="user-name">${String(p.tag)}</a> 
    <a class="view-profile" href="${p.avatar}">Ver</a>
</div>\n`
})

const novoElemento = document.createElement("div");
content.innerHTML = ' '

const input = document.getElementById('input-s')

novoElemento.innerHTML = ctn2
content.appendChild(novoElemento)

function searchFriend() {

    const novoElemento = document.createElement("div");

    content.innerHTML = ' '

    const input = document.getElementById('input-s')
    let ctn = ' '
    if(input.value.length < 1) {
        friends.forEach(p => {
            ctn += `<div class="content-item">
            <img class="user-icon" src="${p.link}">
            <a class="user-name">${String(p.tag)}</a> 
            <a class="view-profile" href="${p.avatar}">Ver</a>
        </div>\n`
        })

    novoElemento.innerHTML = ctn
    content.appendChild(novoElemento)
    } else {
        const arc = friends.filter(y => y.id === input.value)
        const ar2 = friends.filter(y => y.tag.toLowerCase().includes(input.value.toLowerCase()))
    

        if(arc.length > 0) {
            arc.forEach(p => {
                ctn += `<div class="content-item">
                <img class="user-icon" src="${p.link}">
                <a class="user-name">${String(p.tag)}</a> 
                <a class="view-profile" href="${p.avatar}">Ver</a>
            </div>\n`
            })
        } else if(ar2.length > 0) {
            ar2.forEach(p => {
                ctn += `<div class="content-item">
                <img class="user-icon" src="${p.link}">
                <a class="user-name">${String(p.tag)}</a> 
                <a class="view-profile" href="${p.avatar}">Ver</a>
            </div>\n`
            })
        } else {
            friends.forEach(p => {
                ctn += `<div class="content-item">
                <img class="user-icon" src="${p.link}">
                <a class="user-name">${String(p.tag)}</a> 
                <a class="view-profile" href="${p.avatar}">Ver</a>
            </div>\n`
            })
        }
    
        novoElemento.innerHTML = ctn
        content.appendChild(novoElemento);
    }

    
}

