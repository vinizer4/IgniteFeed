import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/vinizer4.png" />
                    <div className={styles.authorInfo}>
                        <strong>Vinicius Teixeira</strong>
                        <span>JavaScript Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 👋</p>
                <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz na trilha Ignite React.js.</p>
                <p>
                    <a href="">👉{' '}jane.desing/doctorcare</a>
                </p> 

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#ignite</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit" >Publicar</button>
                </footer>

                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}