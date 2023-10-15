import { testimonies } from '@/constants/testimonies';
import styles from './Testimony.module.css';
import TestimonyCard from '@/components/card/TestimonyCard/TestimonyCard';

const Testimony = () => {
    return (
        <div id={styles.container}>
            <span id={styles.heading}>Testimonials</span>
            <div id={styles.wrapper}>
                {testimonies.map((testimony, index) => {
                    return (
                        <TestimonyCard
                            name={testimony.name}
                            position={testimony.position}
                            message={testimony.message}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Testimony;
