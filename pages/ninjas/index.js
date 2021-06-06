import Styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'


export const getStaticProps = async () => {
    // runs at build time
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();


    return {
        props: { ninjas: data }
    }
}

const Ninja = ({ ninjas }) => {
    return ( 
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={'/ninjas/' + ninja.id } key={ninja.id}>
                    <a className={Styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninja;