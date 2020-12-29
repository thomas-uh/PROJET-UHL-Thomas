<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Order
 *
 * @ORM\Table(name="order")
 * @ORM\Entity
 */
class Order
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_order", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="order_id_order_seq", allocationSize=1, initialValue=1)
     */
    private $idOrder;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date", nullable=false)
     */
    private $date;

    /**
     * @var \Client
     *
     * @ORM\ManyToOne(targetEntity="Client", inversedBy="orders")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="buyer_id", referencedColumnName="id_user")
     * })
     */
    private $buyer;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Product")
     * @ORM\JoinTable(name="order_product",
     *   joinColumns={
     *     @ORM\JoinColumn(name="order_id", referencedColumnName="id_order")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="product_id", referencedColumnName="id_product")
     *   }
     * )
     */
    private $products;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->products = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idOrder.
     *
     * @return int
     */
    public function getIdOrder()
    {
        return $this->idOrder;
    }

    /**
     * Set date.
     *
     * @param \DateTime $date
     *
     * @return Order
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date.
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set buyer.
     *
     * @param \Client|null $buyer
     *
     * @return Order
     */
    public function setBuyer(\Client $buyer = null)
    {
        $this->buyer = $buyer;

        return $this;
    }

    /**
     * Get buyer.
     *
     * @return \Client|null
     */
    public function getBuyer()
    {
        return $this->buyer;
    }

    /**
     * Add product.
     *
     * @param \Product $product
     *
     * @return Order
     */
    public function addProduct(\Product $product)
    {
        $this->products[] = $product;

        return $this;
    }

    /**
     * Remove product.
     *
     * @param \Product $product
     *
     * @return boolean TRUE if this collection contained the specified element, FALSE otherwise.
     */
    public function removeProduct(\Product $product)
    {
        return $this->products->removeElement($product);
    }

    /**
     * Get products.
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getProducts()
    {
        return $this->products;
    }
}
