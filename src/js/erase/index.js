const erase = (e) => {
    e.preventDefault();
    let target = e.target.parentNode;
    let foo = target.parentNode;
    foo.remove(foo);

}

module.exports = erase;

