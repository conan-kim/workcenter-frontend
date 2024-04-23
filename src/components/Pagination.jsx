import classNames from 'classnames'

Pagination.defaultProps = {
  tcnt: 0, // 전체 데이터 카운트
  page: 0, // 현재 페이지 (페이지 인덱스는 0 부터)
  size: 10, // 표시할 데이터 개수 (기본 10)
  psiz: 10, // 표시할 페이지 개수 (기본 10)
  move() {} // 페이지 이동 함수 (인자값 page)
}

export function Pagination({tcnt, psiz, page, size, move}) {
  const pcnt = !size ? 0 : Math.ceil(tcnt / size)
  const pstt = !psiz ? 0 : Math.floor(page / psiz) * psiz
  //const frst = !(page > 0)
  const prev = !!pstt
  const next = pstt + psiz < pcnt
  //const last = !(page + 1 < pcnt)

  if (!pcnt || !psiz) return <></>
  return (
    <div className="pagination">
      {prev && (
        <>
          <button type="button" className="ico-button page-first" onClick={() => move(0)}>
            <span className="hide-text">처음</span>
          </button>
          <button type="button" className="ico-button page-prev" onClick={() => move(pstt - psiz)}>
            <span className="hide-text">이전</span>
          </button>
        </>
      )}
      <ul className="pagination-list">
        {Array.from(Array(pcnt - pstt > psiz ? psiz : pcnt - pstt), (_e, i) => (
          <li key={pstt + i} className={classNames({active: page === pstt + i})}>
            <button type="button" className="page-number" onClick={() => move(pstt + i)}>
              {pstt + i + 1}
            </button>
          </li>
        ))}
      </ul>
      {next && (
        <>
          <button type="button" className="ico-button page-next" onClick={() => move(pstt + psiz)}>
            <span className="hide-text">다음</span>
          </button>
          <button type="button" className="ico-button page-end" onClick={() => move(pcnt - 1)}>
            <span className="hide-text">맨끝</span>
          </button>
        </>
      )}
    </div>
  )
}

export default Pagination
