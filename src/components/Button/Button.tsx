import React from 'react'
import classNames from 'classnames'
import './Button.scss'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button = ({ className, ...props }: Props) => (
  <button className={classNames('Button', className)} {...props} />
)

export default Button
