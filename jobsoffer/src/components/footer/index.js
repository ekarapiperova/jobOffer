import React from 'react'
import Link from '../link'
import styles from './index.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    
      <ul>
        <Link href="#" title="Going to 1" />
        <Link href="#" title="Going to 2" />
        <Link href="#" title="Going to 3" />
        <Link href="#" title="Going to 4" />
        <Link href="#" title="Going to 5" />
        <Link href="#" title="Going to 6" />
      </ul>

  )

    </footer>
  )
}

export default Footer