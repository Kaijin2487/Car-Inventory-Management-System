import { motion } from 'framer-motion';
import { Shield, Users, PenTool as Tool, Award, Car, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">About AutoInventory</h1>
            <p className="text-xl opacity-90">
              We're revolutionizing the way people buy and sell cars by creating a transparent,
              efficient, and trustworthy marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Mission</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                At AutoInventory, we believe that buying or selling a car should be as easy and
                transparent as possible. Our platform connects trusted dealers with buyers,
                providing all the tools and information needed to make informed decisions.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We're committed to revolutionizing the automotive marketplace by leveraging
                technology to create a seamless, trustworthy, and efficient experience for
                everyone involved.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-neutral-50 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Trust & Security</h3>
                <p className="text-neutral-600 text-sm">
                  Verified dealers and secure transactions
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-accent-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-neutral-600 text-sm">
                  Growing network of dealers and buyers
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <Tool className="h-8 w-8 text-success-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-neutral-600 text-sm">
                  Advanced tools and features
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <Award className="h-8 w-8 text-warning-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Quality</h3>
                <p className="text-neutral-600 text-sm">
                  High standards and verification
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg text-center"
            >
              <Car className="h-8 w-8 text-primary-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-neutral-900 mb-2">10,000+</div>
              <div className="text-neutral-600">Cars Listed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg text-center"
            >
              <Users className="h-8 w-8 text-accent-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-neutral-900 mb-2">5,000+</div>
              <div className="text-neutral-600">Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg text-center"
            >
              <Shield className="h-8 w-8 text-success-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-neutral-900 mb-2">500+</div>
              <div className="text-neutral-600">Verified Dealers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg text-center"
            >
              <Clock className="h-8 w-8 text-warning-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-neutral-900 mb-2">24/7</div>
              <div className="text-neutral-600">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Leadership Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Meet the experienced professionals dedicated to revolutionizing the automotive marketplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                name: "Sarah Johnson",
                role: "Chief Technology Officer",
                image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                name: "Michael Brown",
                role: "Head of Operations",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-neutral-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;