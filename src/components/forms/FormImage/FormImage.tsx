import React, { useState } from 'react'
import isNumber from 'lodash/isNumber'
import classnames from 'classnames'
import { FormBaseProps } from '../FormBaseProps'
import { FormInput } from '../FormInput/FormInput'
import { BsImage } from 'react-icons/bs'

export interface FormImageProps extends FormBaseProps {
  width?: string | number
  height?: string | number
  watch: any
}

export const FormImage: React.FC<FormImageProps> = ({
  label,
  labelDescription,
  name,
  width = '100%',
  height = 200,
  placeholder,
  register,
  watch,
  defaultValue = null,
  validationErrors,
  className = '',
}) => {
  const imageUrl = watch(name)

  const [currentImageIsValid, currentImageIsValidSet] = useState(true)

  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <div style={{ width }} className='relative flex flex-col'>
          <FormInput
            type='text'
            register={register}
            name={name}
            defaultValue={defaultValue}
            validationErrors={validationErrors}
            placeholder={placeholder}
            labelDescription={labelDescription}
            label={label}
            className={className}
          />

          <div className='flex justify-center p-2'>
            <img
              alt={imageUrl}
              style={{ width, height }}
              className={classnames(
                'object-scale-down rounded-lg border-solid shadow-2xl border-base-300',
                {
                  hidden: currentImageIsValid === false,
                }
              )}
              src={imageUrl || defaultValue || null}
              onError={() => {
                currentImageIsValidSet(false)
              }}
              onLoad={() => {
                currentImageIsValidSet(true)
              }}
            />
            <BsImage
              size={(isNumber(height) && height) || (isNumber(width) && width) || 96}
              className={classnames('h-24', {
                hidden: currentImageIsValid === true,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
