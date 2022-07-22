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
      PopularGrocery: undefined | { filters: object };
      Favorites: undefined;
      Settings: undefined;
      Notification: undefined;
      FindGrocery: undefined;
      Others: undefined;
      ProfileStackScreens:
        | undefined
        | {
            screen: string;
          };
    }
  }
}
