import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/Brunoalmeidev/repos')
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);

            })
    }, []);

    return (
        <>
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            <ul>
                {/* {repos.map(repositorio => ( */}
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id}>
                        <b>Nome:</b> {name} <br />
                        <b>Linguagem:</b> {language} <br />
                        <a target="_blank" href={html_url}>Visitar no Github</a> <br />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ReposList;