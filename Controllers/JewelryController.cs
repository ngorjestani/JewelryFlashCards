using AngleSharp;
using JewelryFlashCards.Models;
using Microsoft.AspNetCore.Mvc;

namespace JewelryFlashCards.Controllers;

public class JewelryController : BaseController
{
    public JewelryController(ILogger<JewelryController> logger)
        : base(logger)
    {
    }

    [HttpGet]
    [Route("anatometal")]
    public async Task<IActionResult> GetAnatometalJewelry()
    {
        var config = Configuration.Default.WithDefaultLoader();
        var context = BrowsingContext.New(config);
        var document = await context.OpenAsync(
            "https://anatometal.com/jewelry/threaded-and-threadless-ends/"
        );
        var productElements = document.QuerySelectorAll(".col-product");
        var jewelryList = productElements
            .Select(
                x =>
                    new JewelryFlashCard
                    {
                        Name = x.QuerySelector("a h4")?.TextContent ?? "",
                        Link = x.QuerySelector("a")?.GetAttribute("href") ?? "",
                        ImageLink = x.QuerySelector("a img")?.GetAttribute("src") ?? ""
                    }
            )
            .ToList();

        var random = new Random();

        var randomIndex = random.Next(0, jewelryList.Count);

        return Ok(jewelryList[randomIndex]);
    }
}