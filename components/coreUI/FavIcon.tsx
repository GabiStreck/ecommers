import { useCallback, useState } from 'react'

import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import IconButton from './IconButton'

const FavIcon = () => {
    const [like, setLike] = useState<boolean>(false)

    const handleOnChange = useCallback((): void => {
        setLike(prev => !prev)
    }, [])

    return (
        <IconButton action={handleOnChange}>
            {!like ? <HeartIcon width={20} height={20} />
                : <HeartIconSolid width={20} height={20} color='#FF3131' />
            }
        </IconButton>
    )
}

export default FavIcon