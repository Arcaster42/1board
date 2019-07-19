const head = document.getElementById('posthead')

const updateMessages = (msg) => {
    const msgDiv = document.createElement('div')
    msgDiv.className = 'message'
    const content = msg.content
    head.appendChild(msgDiv)
}

const checkScript = () => {
    console.log('call is working')
}

messages.forEach((msg) => appendHistory(msg))
console.log('script called')