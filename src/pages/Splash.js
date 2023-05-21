
import SplashScreen from '@/components/SplashScreen'
import {motion} from 'framer-motion'
import { useState } from 'react';

export default function Splash() {
    const [introRun, setIntroRun] = useState(false);

    return(
        <motion.div>
            <SplashScreen runComplete={(val) => setIntroRun(val)} />
        </motion.div>
    )
}