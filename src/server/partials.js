import {spinner} from './spinner';
export function before(page){
return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Loading...</title>
            <link rel="modulepreload" href="/dist/${page}.js" />
            <style>${spinner()}</style>
        </head>
        <body>
            <div id="spinner"></div>
            <div id="app">`;
}

export function after(page, props){
    return `</div>
    <script>window._props_ = ${JSON.stringify(props)}</script>
    <script src="/dist/${page}.js" type="module"></script>
    </body></html>`;
}