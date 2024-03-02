import { useLanguage } from '@/store/use-language'

interface Props {
  titleCz: string
  titleEn: string
  titleDe: string
  titleUa: string
}

export const SectionTitle = ({ titleCz, titleEn, titleDe, titleUa }: Props) => {
  const { language } = useLanguage()

  return (
    <h3 className='font-stabil text-xl lg:text-3xl'>
      {language === 'cz' && titleCz}
      {language === 'en' && titleEn}
      {language === 'de' && titleDe}
      {language === 'ua' && titleUa}
    </h3>
  )
}
