import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'
import { Container } from 'vtex.store-components'

import { ITextCustomProps } from './textCustom.interfaces'
import styles from './textCustom.module.css'

const CSS_HANDLES = ['textContainer']

const TextCustom: FunctionComponent<ITextCustomProps> = ({ title }) => {
  const [isShown, setShow] = useState<boolean>(false)
  const handles = useCssHandles(CSS_HANDLES)

  useEffect(() => {
    // toda vez que o state isShown for alterado, vamos dar um log no console
    // o useEffect vai observar as mudanças de cada dependencia
    console.log(isShown) // eslint-disable-line
  }, [isShown]) // dependencia

  const handleClick = useCallback(() => {
    // Devemos usar para otimizar a função sem precisar recria-la novamente
    // para cada item usado dentro do useCallback devemos adiciona-lo nas dependencias []

    setShow(!isShown)
  }, [setShow, isShown]) // dependencia

  const classNames = useMemo(() => {
    // Devemos usar para otimizar|memorizar um valor
    // para cada item usado dentro do useMemo devemos adiciona-lo nas dependencias []
    return applyModifiers(handles.textContainer, isShown ? 'show' : '')
  }, [isShown, handles]) // dependencia

  return (
    <Container className={styles.container}>
      <h1 className={classNames}>{title}</h1>
      <button onClick={handleClick}>Mostrar titulo?</button>
    </Container>
  )
}

export default TextCustom
