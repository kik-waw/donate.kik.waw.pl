import {useRouter} from 'next/router'
import Index from "./Index";

export default () => {
    const router = useRouter()
    const {lang} = router.query

    return <Index lang={lang} />
}
