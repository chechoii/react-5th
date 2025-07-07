import { createElement as h } from "../../lib/react.js";


/* type props = {
    name:string;
    status?:'online' | 'offline' | 'away' | 'dont-disturb';
    size?:number;
} */

export default function Avatar({name,status = 'offline', size = 64}){

    let iconPath = '';
    let statusMessage = '';

    switch (status) {
        case 'offline':
            iconPath = '/icons/status-offline.svg';
            statusMessage = '오프라인';
            break;
        case 'online':
            iconPath = '/icons/status-online.svg';
            statusMessage = '온라인';
            break;
        case 'disturb':
            iconPath = '/icons/status-disturb.svg';
            statusMessage = '방해금지';
            break;
        case 'await':
            iconPath = '/icons/status-await.svg';
            statusMessage = '자리비움';
            break;
        
    
        default:
            break;
    }

    const label = `${name} (${statusMessage})`;

    return h(
        'li',
        {className:'avatar'},
        h('figure', 
            {'aria-label':label, title:label},
            h('div', {className:'cover'},
                h('img', {src:`/avatar/${name}.png`, alt:''})
            ),
            h('figcaption', null,
                h('img', {src:iconPath, alt:''})
            )
        )
    )
}