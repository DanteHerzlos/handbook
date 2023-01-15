import { ICard } from "../types/ICard"
import db from "../libs/db"

class CardServices {
  static getAllCards = () => {
    return db.prepare("SELECT * FROM cards").all()
  }

  static getCardById = (event: Electron.IpcMainInvokeEvent, id: number) => {
    return db.prepare(`SELECT * FROM cards WHERE id=${id}`).get()
  }

  static addCard = (event: Electron.IpcMainInvokeEvent, dto: ICard) => {
    return db
      .prepare(
        `INSERT INTO cards (owners, address, land_plot_index, house_index, 
        land_area, house_area, basis_partnership, postal_address, tel_numbers, 
        email) VALUES ('${dto.owners}', '${dto.address}', '${dto.land_plot_index}', 
        '${dto.house_index}', '${dto.land_area}', '${dto.house_area}', 
        '${dto.basis_partnership}', '${dto.postal_address}', '${dto.tel_numbers}', 
        '${dto.email}')`
      )
      .run()
  }

  static editCard = (event: Electron.IpcMainInvokeEvent, dto: ICard) => {
    const { id } = dto
    return db
      .prepare(
        `UPDATE cards SET
        owners='${dto.owners}', 
        address='${dto.address}', 
        land_plot_index='${dto.land_plot_index}', 
        house_index='${dto.house_index}', 
        land_area='${dto.land_area}', 
        house_area='${dto.house_area}', 
        basis_partnership='${dto.basis_partnership}',  
        postal_address='${dto.postal_address}', 
        tel_numbers='${dto.tel_numbers}', 
        email='${dto.email}'
        WHERE id=${id}`
      )
      .run()
  }

  static deleteCardById = (event: Electron.IpcMainInvokeEvent, id: number) => {
    return db.prepare(`DELETE FROM cards WHERE id=${id}`).run()
  }
}

export default CardServices
