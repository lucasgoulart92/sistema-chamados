import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
    component: Component,
    isPrivate,
    ...rest
}){

    const loading = false;
    const signed = false;

    if(loading){
        return(
            <div></div>
        )
    }
    // se estiver logado renderiza a div

    if(!signed && isPrivate){
        return <Redirect to="/" />
    }
    // se não estiver logado e a página for privada, redireciona para a tela de login

    if(signed && !isPrivate){
        return <Redirect to="/dashboard" />
    }
    // se estiver logado e a página não for privada, envia para o dashboard

    return(
        <Route
            {...rest}
            render={ props => (
                <Component {...props} />
            )}
        />
    )
}