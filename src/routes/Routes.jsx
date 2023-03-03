import { Route } from 'react-router-dom'
import { UserLayOut } from '../lauout/UserlayOut'

export const Routes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<UserLayOut />} />
            </Route>
        </Routes>
    )
}
