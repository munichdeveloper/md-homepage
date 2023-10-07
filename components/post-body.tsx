import Link from 'next/link'
import styles from './post-body.module.css'

export default function PostBody({ content, link = '#' }) {
  return (
    <Link href={link} target='_blank'>
      <div className="max-w-2xl mx-auto">
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content + ' <b>[weiter lesen..]</b>' }}
        />
      </div>
    </Link>
  )
}
