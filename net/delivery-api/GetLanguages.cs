// DocSection: delivery_api_get_languages
// Tip: Find more about .NET SDKs at https://docs.kontent.ai/net
using Kentico.Kontent.Delivery;

// Creates an instance of the delivery client
// Tip: Use dependency injection for this in your apps https://docs.kontent.ai/net-register-client
IDeliveryClient client = DeliveryClientBuilder
      .WithProjectId("<YOUR_PROJECT_ID>")
      .Build();

// Gets 3 languages
IDeliveryLanguageListingResponse response = await deliveryClient.GetLanguagesAsync(
    new List<IQueryParameter>() {
        new LimitParameter(3)
    });

IList<ILanguage> languages = response.Languages;
// EndDocSection