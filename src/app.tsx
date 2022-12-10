import { useState } from 'react';

import HomeSection from './components/home/home';
import UserSection from './components/usuario/usuario';

const App = (props:any) => {
    const [active, setActive] = useState('secondSection');

    return (
        <main>
            {active === 'firstSection' && <HomeSection/>}
            {active === 'secondSection' && <UserSection/>}
        </main>
    )
}

export default App;