const merchants = [
  {
    index: 0,
    premium: "true",
    firstName: "FirstName1",
    lastName: "LastName1",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 1,
    premium: "true",
    firstName: "FirstName2",
    lastName: "LastName2",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 2,
    premium: "true",
    firstName: "FirstName3",
    lastName: "LastName3",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 3,
    premium: "true",
    firstName: "FirstName4",
    lastName: "LastName4",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 4,
    premium: "true",
    firstName: "FirstName5",
    lastName: "LastName5",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 5,
    premium: "true",
    firstName: "FirstName6",
    lastName: "LastName6",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 6,
    premium: "true",
    firstName: "FirstName7",
    lastName: "LastName7",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 7,
    premium: "true",
    firstName: "FirstName8",
    lastName: "LastName8",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 8,
    premium: "true",
    firstName: "FirstName9",
    lastName: "LastName9",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 9,
    premium: "true",
    firstName: "FirstName10",
    lastName: "LastName10",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 10,
    premium: "true",
    firstName: "FirstName11",
    lastName: "LastName11",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 11,
    premium: "true",
    firstName: "FirstName12",
    lastName: "LastName12",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 12,
    premium: "true",
    firstName: "FirstName13",
    lastName: "LastName13",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 13,
    premium: "true",
    firstName: "FirstName14",
    lastName: "LastName14",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {
    index: 14,
    premium: "true",
    firstName: "FirstName15",
    lastName: "LastName15",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  },
  {    
    index: 15,
    premium: "true",
    firstName: "FirstName16",
    lastName: "LastName16",
    email: "tempMail@domain.com",
    phone: 43412412,
    avatarUrl: "https://picsum.photos/100/50",
  }

];

class MerchantApi {
  static getAllMerchants() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], merchants));
      }, 0);
    });
  }

  static saveMerchant(merchant) {
    merchant = Object.assign({}, merchant);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minMerchantFirstNameLength = 1;
        if (merchant.firstName.length < minMerchantFirstNameLength) {
          reject(`firstName must be at least ${minMerchantFirstNameLength} characters.`);
        }

        if (merchant.index !== "") {
          const existingMerchantIndex = merchants.findIndex(a => a.index === merchant.index);
          merchants.splice(existingMerchantIndex, 1, merchant);
        } else {
          merchant.index = merchants.length-1+1;
          merchants.push(merchant);
        }

        resolve(merchant);
      }, 0);
    });
  }

  static deleteMerchant(mId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMerchantToDelete = merchants.findIndex(merchant => {
          return merchant.index === mId ;
        });
        merchants.splice(indexOfMerchantToDelete, 1);
        resolve(merchants);
      }, 0);
    });
  }
}

export default MerchantApi;
