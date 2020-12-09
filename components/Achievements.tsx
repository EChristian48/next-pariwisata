export type AchievementProps = {
  href?: string
  judul: string
  deskripsi: string
}

export default function Achievement({
  deskripsi,
  judul,
  href,
}: AchievementProps) {
  return (
    <div className='col-md-6'>
      <div className='service-item'>
        <h4>{href ? <a href={href}>{judul}</a> : judul}</h4>
        <div className='line-dec'></div>
        <p>{deskripsi}</p>
      </div>
    </div>
  )
}
