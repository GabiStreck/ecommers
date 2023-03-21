import { FC, ReactNode, useRef } from 'react'
import styles from '@/styles/filter/filter.module.css'
import IconButton from '../coreUI/IconButton';
import { TrashIcon } from '@heroicons/react/24/outline';
import useFilters from '@/hooks/useFilters';

interface Props {
    title: string;
    children?: ReactNode;
    loading?: boolean;
    showResetForm?: boolean,
    typeFilter: string
}

const FilterContainer: FC<Props> = ({
    title,
    children,
    loading,
    showResetForm,
    typeFilter
}) => {
    if (loading) return <div>loading..</div>

    const { handlerClearFilter } = useFilters()

    const formRef = useRef<HTMLFormElement>(null);
    const handleFormReset = (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault()
        handlerClearFilter(typeFilter)
        formRef.current?.reset();
    };

    return (
        <form className={styles.filter_container} ref={formRef}>
            <div>
                <h1 className={styles.filter_title}>{title}</h1>
                {showResetForm &&
                    <IconButton action={(e) => handleFormReset(e)} title='Remove filters'>
                        <TrashIcon width={15} height={15} color="#FF3131" />
                    </IconButton>
                }
            </div>

            <ul className={styles.filter_list}>
                {children}
            </ul>
        </form>
    )
}

export default FilterContainer