export function getRedirectPath({type, avatar}) {
    let url = (type === 'Client')? '/client' : '/service';
    if(!avatar) {
        url += 'info'
    }
    return url
}