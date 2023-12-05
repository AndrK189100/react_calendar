/* eslint-disable react/jsx-key */
import './css/main.css'
import './calendarmatrix'
import getCalendarMatrix from './calendarmatrix'

export function Calendar({date}) {

    const calendarMatrix = getCalendarMatrix(date);

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{date.toLocaleString('default', {weekday: 'long'})}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                    <div className="ui-datepicker-material-month">{date.toLocaleString('default', {month: 'long'})}</div>
                    <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{date.toLocaleString('default', {month: 'long'})}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col className="ui-datepicker-week-end"/>
                    <col className="ui-datepicker-week-end"/>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
                </thead>
                <tbody>
                    {
                        calendarMatrix.map(week => {
                            return (
                                <tr>
                                    {
                                        week.map(day => {
                                            return (

                                                day < 0 ? <td className='ui-datepicker-other-month'>{-1*day}</td> : day === date.getDate() ? <td className='ui-datepicker-today'>{day}</td> : <td>{day}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}