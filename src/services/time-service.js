export class TimeService{
    static shortDate (date){
        let formatDate = new Intl.DateTimeFormat("es" , {
            dateStyle: "short"
          });
        return formatDate.format(new Date (date));
    }
}