export class Ofertas {
  versions: [
    {
      characteristics: [
        {
          versions: [
            {
              displayValue: string;
              validFor: {
                startDateTime: Date;
              };
              valueType: string;
              name: string;
              id: string;
              valueTypeSpecification: {
                id: string;
              };
              type: string;
              value: string;
              characteristicValues: [
                {
                  displayValue: string;
                  isDefault: boolean;
                  validFor: {
                    startDateTime: Date;
                  };
                }
              ];
              properties: [
                {
                  isSelected: boolean;
                  value: string;
                }
              ];
            }
          ];
          id: string;
        }
      ];
      markup: number;
      price: {
        amount: number;
        units: {
          code: string;
          name: string;
        };
      };
      percentage: number;
      name: string;
      id: string;
      plaId: string;
      frequency: string;
    }
  ];
  id: string;

  constructor(id?: string, versions?: any){
    this.id = id;
    this.versions = versions;

  }

}


