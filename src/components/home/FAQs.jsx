// FAQs Component
const FAQs = () => {
    return (
        <div className="lg:max-w-[1000px] mx-auto space-y-[10px]">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">All products is made in Bangladesh or Abroad?</div>
                <div className="collapse-content">
                    <p>Thanks question us,Maximum products is imported but some products made in Bangladesh.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How is product quality?</div>
                <div className="collapse-content">
                    <p>I know you will buy emotion not a products so belive us quality is good .</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How to orders products?</div>
                <div className="collapse-content">
                    <p>At first select your needed products then confirm purses with your information.Then we will send order confirmation email.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQs;