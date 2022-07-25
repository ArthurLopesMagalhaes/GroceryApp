export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      SignUp: undefined;
      FillBio: undefined;
      PaymentMethod: undefined;
      UploadPhoto: undefined;
      SetLocation: undefined;
      Congrats: undefined;
      ForgotPassword: undefined;
      Home: undefined;
      OrderDetails: undefined;
      Chat: undefined;
      Profile: undefined;
      TabRoutes: undefined;
      PopularStore: undefined;
      PopularGrocery:
        | undefined
        | {
            filters?: string[];
          };
      Favorites: undefined;
      Settings: undefined;
      Notification: undefined;
      FindGrocery: undefined;
      Testimonials: {
        storeId?: string;
        productId?: string;
      };
      Favorites: undefined;
      Others: undefined;
      StoreHome: { storeId: string };
      GroceryDetails: { groceryId: string };
      ProfileStackScreens:
        | undefined
        | {
            screen: string;
          };
    }
  }
}
