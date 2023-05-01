function removeContent (ele) {
    while(ele.hasChildNodes()){
        ele.removeChild(ele.firstChild);
    }
    return;
}

export { removeContent }