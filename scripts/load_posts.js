let head = document.getElementById('posthead')

const addPost = (x, child) => {
    if (x.title === undefined)
        return
    let posting = document.createElement('div')
    let title = document.createElement('h3')
    let content = document.createElement('p')
    if (child) {
        posting.className = 'top'
    }
    if (!child) {
        posting.className = 'child'
    }
    posting.appendChild(title)
    posting.appendChild(content)

    //reply element
    let reply = document.createElement('a')
    reply.href = '/reply'
    reply.innerText = 'reply'
    reply.className = 'reply'
    reply.id = x.id
    
    posting.appendChild(reply)
    title.innerText = x.title
    content.innerText = x.content
    head.appendChild(posting)
    x.children.forEach(y => {
        if (y.title === undefined)
            return
        addPost(y, true)
    })
}

posts.forEach(x => {
    addPost(x, false)
})